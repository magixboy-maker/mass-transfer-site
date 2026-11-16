import type { Product } from './products';

// 滤料：2 个产品页（瓷砂滤料 / 陶粒滤料）

export const FILTER_MEDIA: Product[] = [
  {
    slug: 'ceramic-sand-filter-media',
    name: 'Ceramic Sand Filter Media',
    title: 'Ceramic Sand Filter Media | Water and Wastewater Filtration Media',
    h1: 'Ceramic Sand Filter Media',
    metaDescription:
      'Ceramic sand filter media for potable water, industrial water and wastewater filtration. Hard granular media with uniform grading and backwash stability.',
    targetKeyword: 'ceramic sand filter media',
    category: 'filter-media',
    intro:
      'Filter media fail quietly: the bed channels, the depth is lost, or the medium washes out during backwash, and the plant keeps running while turbidity creeps up. Ceramic sand is specified where a hard, dense, chemically stable medium is needed so the bed keeps its grading through many backwash cycles.',
    specs: [
      { item: 'Form', value: 'Granular, angular to rounded grains' },
      { item: 'Duty', value: 'Suspended solids removal in pressure and gravity filters' },
      { item: 'Selection basis', value: 'Filtration rate, inlet turbidity, target turbidity, backwash regime, bed depth' },
      { item: 'Key properties', value: 'Hardness and wear resistance, chemical stability, uniform grading' },
      { item: 'Bed arrangement', value: 'Supported on graded gravel where the design requires it' },
    ],
    materials: ['Sintered ceramic / ceramic sand'],
    applications: [
      'Potable water treatment',
      'Industrial water and cooling water filtration',
      'Wastewater tertiary treatment',
      'Pre-treatment ahead of membrane systems',
      'Swimming pool and process water filtration',
    ],
    comparison:
      'Against silica sand, ceramic media resist attrition better and are less prone to cementing in aggressive water, at a higher cost per tonne. Against anthracite they are denser, which suits higher filtration rates and more vigorous backwashing.',
    faqs: [
      {
        q: 'Can ceramic sand replace silica sand in an existing filter?',
        a: 'Usually yes, provided the support gravel grading and backwash rate are checked — a denser medium needs a higher backwash velocity to fluidise. Send the filter dimensions and current operating data.',
      },
      {
        q: 'How is the media specified?',
        a: 'By effective size and uniformity coefficient, both derived from your filtration rate and permitted head loss. Tell us the duty and we will propose a grading.',
      },
      {
        q: 'Is it suitable for drinking water?',
        a: 'Yes, ceramic media are used in potable water duty. We will confirm the inertness and leaching requirements applicable in your market.',
      },
    ],
  },
  {
    slug: 'ceramsite-filter-media',
    name: 'Ceramsite Filter Media',
    title: 'Ceramsite Filter Media | Biofilter and Wastewater Media Supplier',
    h1: 'Ceramsite Filter Media',
    metaDescription:
      'Ceramsite media for biological wastewater treatment and filtration. Porous surface for biofilm growth, durable granules for long service in aerated beds.',
    targetKeyword: 'ceramsite filter media',
    category: 'filter-media',
    intro:
      'In biological treatment the media is not just a filter — it is the habitat. Ceramsite has a porous, rough surface that lets a biofilm establish and hold on through backwashing, which is why it is used in aerated biological filters and in constructed wetland and polishing duty. The engineering question is whether the granule keeps that surface and its strength over years of cycling.',
    specs: [
      { item: 'Form', value: 'Rounded, porous granules' },
      { item: 'Duty', value: 'Biological aerated filters, biofilm carriers, polishing filtration' },
      { item: 'Selection basis', value: 'Organic loading, hydraulic loading, bed depth, aeration regime, backwash intensity' },
      { item: 'Key properties', value: 'Open surface porosity, granule strength, resistance to attrition' },
      { item: 'Bed arrangement', value: 'Graded support layer beneath the active bed' },
    ],
    materials: ['Sintered clay / ceramsite', 'Fly-ash based ceramsite on request'],
    applications: [
      'Biological aerated filters (BAF)',
      'Wastewater polishing and tertiary treatment',
      'Constructed wetlands',
      'Stormwater and surface water treatment',
      'Aquaculture water treatment',
    ],
    comparison:
      'Compared with solid ceramic sand, ceramsite gives a surface a biofilm can colonise, which is what biological duty needs; it is lighter and slightly less wear resistant. Where the job is purely physical filtration at high rate, ceramic sand is the more durable choice.',
    faqs: [
      {
        q: 'What decides whether ceramsite or ceramic sand is right?',
        a: 'Whether the bed has a biological job. If bacteria are meant to grow on the medium, ceramsite; if the bed only removes solids, ceramic sand is harder and lasts longer.',
      },
      {
        q: 'Will the granules break down over time?',
        a: 'Attrition is the main life-limiting factor, and it depends on backwash intensity and the aeration regime. Run the bed within its design backwash velocity and the granules hold up for years.',
      },
      {
        q: 'Can you supply the support gravel as well?',
        a: 'Yes. Support layers are graded with the active bed so the whole depth is designed together rather than assembled from whatever is available.',
      },
    ],
  },
];
