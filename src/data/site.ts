// 站点全局数据与导航配置
// 身份口径铁律：factory-direct supply，绝不出现 our own factory / subsidiary / 持股 / 工厂实名

export const SITE = {
  name: 'Mass Transfer Equipment Co.',
  legalName: 'Pingxiang Xinquan Chemical Packing Co., Ltd.',
  url: 'https://www.mass-transfer.com',
  domain: 'mass-transfer.com',
  tagline: 'Tower packing, random & structured packing, mist eliminators and column internals — factory-direct from China.',
  description:
    'Factory-direct supplier of mass transfer equipment: random and structured packing, mist eliminators and tower internals for distillation, absorption, scrubbing and carbon capture. ISO 9001-certified production.',
  contact: {
    salesName: 'Jack Lee',
    salesTitle: 'Sales Manager',
    salesEmail: 'jack.lee@pxxinquan.com',
    formEmail: 'jack.lee@pxxinquan.com',
    whatsapp: '+86-18979985818',
  },
  // 结构化数据：Organization
  org: {
    '@type': 'Organization',
    name: 'Pingxiang Xinquan Chemical Packing Co., Ltd.',
    url: 'https://www.mass-transfer.com',
    email: 'jack.lee@pxxinquan.com',
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
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
