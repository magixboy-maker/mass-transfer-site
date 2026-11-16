import type { APIRoute } from 'astro';
import { PRODUCTS } from '../data/products';
import { APPLICATIONS } from '../data/applications';
import { INTERNALS } from '../data/internals';

// 构建时自动生成 sitemap.xml —— 新增文章/产品后不需要手动改这里
const BASE = 'https://www.mass-transfer.com';

const STATIC_PATHS: { path: string; freq: string }[] = [
  { path: '/', freq: 'weekly' },
  { path: '/random-packing/', freq: 'monthly' },
  { path: '/structured-packing/', freq: 'monthly' },
  { path: '/mist-eliminator/', freq: 'monthly' },
  { path: '/tower-internals/', freq: 'monthly' },
  { path: '/applications/', freq: 'monthly' },
  { path: '/materials/', freq: 'monthly' },
  { path: '/quality/', freq: 'monthly' },
  { path: '/about/', freq: 'monthly' },
  { path: '/contact/', freq: 'monthly' },
  { path: '/blog/', freq: 'weekly' },
  { path: '/shipments/', freq: 'weekly' },
];

const slugsFrom = (glob: Record<string, unknown>) =>
  Object.keys(glob)
    .map((k) => k.split('/').pop()!.replace(/\.md$/, ''))
    .sort();

export const GET: APIRoute = () => {
  const blogSlugs = slugsFrom(import.meta.glob('../content/blog/*.md'));
  const shipmentSlugs = slugsFrom(import.meta.glob('../content/shipments/*.md'));

  const entries: { path: string; freq: string }[] = [
    ...STATIC_PATHS,
    ...PRODUCTS.map((p) => ({ path: `/${p.category}/${p.slug}/`, freq: 'monthly' })),
    ...INTERNALS.map((i) => ({ path: `/tower-internals/${i.slug}/`, freq: 'monthly' })),
    ...APPLICATIONS.map((a) => ({ path: `/applications/${a.slug}/`, freq: 'monthly' })),
    ...blogSlugs.map((s) => ({ path: `/blog/${s}/`, freq: 'monthly' })),
    ...shipmentSlugs.map((s) => ({ path: `/shipments/${s}/`, freq: 'monthly' })),
  ];

  const seen = new Set<string>();
  const rows: string[] = [];
  for (const e of entries) {
    if (seen.has(e.path)) continue;
    seen.add(e.path);
    rows.push(`  <url><loc>${BASE}${e.path}</loc><changefreq>${e.freq}</changefreq></url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
};
