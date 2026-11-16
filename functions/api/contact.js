// Cloudflare Pages Function — 询盘表单处理
// 路由: POST /api/contact
// 环境变量（在 Cloudflare Pages 项目设置中配置，不要写进代码）:
//   RESEND_API_KEY  必填
//   TO_EMAIL        收询盘的邮箱，多个用逗号分隔
//   FROM_EMAIL      发件人，必须是 Resend 已验证域名下的地址
//   SITE_URL        站点地址，用于邮件里的链接

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function onRequestPost({ request, env }) {
  try {
    const ct = request.headers.get('content-type') || '';
    if (!ct.includes('form')) return json({ ok: false, error: 'Invalid content type.' }, 400);

    const fd = await request.formData();
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const company = String(fd.get('company') || '').trim();
    const message = String(fd.get('message') || '').trim();
    const honeypot = String(fd.get('_gotcha') || '').trim();

    // 机器人：静默丢弃，返回成功避免被探测
    if (honeypot) return json({ ok: true });

    if (!name || !email || !message)
      return json({ ok: false, error: 'Please fill in your name, email and message.' }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      return json({ ok: false, error: 'That email address looks invalid.' }, 400);
    if (name.length > 120 || email.length > 200 || company.length > 200 || message.length > 5000)
      return json({ ok: false, error: 'Your message is too long. Please shorten it.' }, 400);

    const KEY = env.RESEND_API_KEY;
    if (!KEY) return json({ ok: false, error: 'Mail service is not configured yet.' }, 500);

    const to = (env.TO_EMAIL || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    if (!to.length) return json({ ok: false, error: 'Mail service is not configured yet.' }, 500);

    // FROM_EMAIL 可以只写地址（form@example.com），也可以写完整发件人
    // （Name <form@example.com>）；两种都接受，避免双重尖括号导致 Resend 拒信
    const fromRaw = (env.FROM_EMAIL || 'onboarding@resend.dev').trim();
    const from = fromRaw.includes('<') ? fromRaw : `Mass Transfer Inquiries <${fromRaw}>`;
    const when = new Date().toLocaleString('en-GB', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric', month: 'short', day: '2-digit',
      hour: '2-digit', minute: '2-digit',
    });

    const internalRows = [
      ['Name', name],
      ['Email', email],
      ['Company', company || '—'],
      ['Received', when + ' (Beijing time)'],
    ]
      .map(
        ([k, v]) => `<tr>
        <td style="padding:8px 14px;background:#f6f8fb;border:1px solid #e3e8ef;font:600 13px/1.5 Arial,sans-serif;color:#4a5568;white-space:nowrap;">${k}</td>
        <td style="padding:8px 14px;border:1px solid #e3e8ef;font:13px/1.5 Arial,sans-serif;color:#1a202c;">${esc(v)}</td>
      </tr>`
      )
      .join('');

    const internalHtml = `<div style="max-width:640px;font-family:Arial,sans-serif;color:#1a202c;">
      <h2 style="margin:0 0 4px;font-size:19px;">New inquiry from mass-transfer.com</h2>
      <p style="margin:0 0 18px;color:#718096;font-size:13px;">Submitted via the contact form.</p>
      <table style="border-collapse:collapse;width:100%;margin-bottom:18px;">${internalRows}</table>
      <h3 style="margin:0 0 6px;font-size:14px;color:#4a5568;">Message</h3>
      <div style="padding:14px;background:#f9fafb;border:1px solid #e3e8ef;border-radius:6px;white-space:pre-wrap;font:14px/1.65 Arial,sans-serif;">${esc(message)}</div>
      <p style="margin:20px 0 0;font-size:13px;color:#718096;">
        Reply directly to this email — the reply-to address is the customer's.
      </p>
    </div>`;

    // 1) 通知内部（主链路，失败即报错）
    const r1 = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `[INQUIRY] ${name}${company ? ' / ' + company : ''}`,
        html: internalHtml,
      }),
    });
    if (!r1.ok) {
      const detail = (await r1.text()).slice(0, 300);
      console.error('resend internal failed', r1.status, detail);
      return json({ ok: false, error: 'We could not send your message. Please email us directly.' }, 502);
    }

    // 2) 客户自动回信已按杰克要求关闭（只通知内部，不向客户发确认信）
    return json({ ok: true });
  } catch (e) {
    console.error('contact handler error', e);
    return json({ ok: false, error: 'Unexpected server error. Please email us directly.' }, 500);
  }
}

export async function onRequestGet() {
  return json({ ok: false, error: 'Method not allowed.' }, 405);
}
