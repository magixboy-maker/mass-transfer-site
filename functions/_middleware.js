// Cloudflare Pages Functions 中间件
// 作用：把裸域（apex）301 永久重定向到 www，避免同一内容有两个可访问地址。
// 只处理 Host 为 mass-transfer.com 的请求，其它 Host（www / *.pages.dev / 预览域）直接放行。

const APEX = 'mass-transfer.com';
const CANONICAL_HOST = 'www.mass-transfer.com';

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === APEX) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
