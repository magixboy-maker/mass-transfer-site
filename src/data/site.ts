// 站点全局数据与导航配置
// 身份口径铁律：factory-direct supply，绝不出现 our own factory / subsidiary / 持股 / 工厂实名

export const SITE = {
  name: 'MASS·TRANSFER',
  legalName: 'MASS·TRANSFER',
  url: 'https://www.mass-transfer.com',
  domain: 'mass-transfer.com',
  tagline: 'Tower packing, random & structured packing, mist eliminators and column internals — factory-direct from China.',
  description:
    'Factory-direct supplier of mass transfer equipment: random and structured packing, mist eliminators and tower internals for distillation, absorption, scrubbing and carbon capture. ISO 9001-certified production.',
  // Google Analytics 4 测量 ID（G-XXXXXXXXXX）。
  // 留空则完全不输出统计脚本；填入后所有页面自动生效。
  ga4Id: '',
  contact: {
    salesName: 'Jack Lee',
    salesTitle: 'Sales Manager',
    salesEmail: 'jacklee@mass-transfer.com',
    formEmail: 'jacklee@mass-transfer.com',
    whatsapp: '+86-18979985818',
  },
  // 结构化数据：Organization
  org: {
    '@type': 'Organization',
    name: 'MASS·TRANSFER',
    url: 'https://www.mass-transfer.com',
    email: 'jacklee@mass-transfer.com',
  },
};

// 导航结构（B1）
export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/random-packing/',
    children: [
      { label: 'Random Packing', href: '/random-packing/' },
      { label: 'Structured Packing', href: '/structured-packing/' },
      { label: 'Mist Eliminators', href: '/mist-eliminator/' },
      { label: 'Tower Internals', href: '/tower-internals/' },
      { label: 'Ceramic Balls', href: '/ceramic-balls/' },
      { label: 'Adsorbents & Desiccants', href: '/adsorbents/' },
      { label: 'Filter Media', href: '/filter-media/' },
      { label: 'Honeycomb Ceramics', href: '/honeycomb-ceramics/' },
    ],
  },
  { label: 'Applications', href: '/applications/' },
  { label: 'Materials', href: '/materials/' },
  { label: 'Quality & Tests', href: '/quality/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
