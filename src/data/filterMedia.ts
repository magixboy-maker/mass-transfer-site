import type { Product } from './products';

// 滤料：2 个产品页（瓷砂滤料 / 陶粒滤料）

export const FILTER_MEDIA: Product[] = [
  {
    slug: 'ceramic-sand-filter-media',
    image: '/images/products/ceramic-sand-filter-media.webp',
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
    image: '/images/products/ceramsite-filter-media.webp',
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
  {
    slug: 'mbbr-biofilter-media',
    name: 'MBBR Biofilter Media',
    image: '/images/products/mbbr-biofilter-media.webp',
    title: 'MBBR Biofilter Media | Moving Bed Biofilm Carriers for Wastewater',
    h1: 'MBBR Biofilter Media',
    metaDescription:
      'HDPE moving bed biofilm reactor media for municipal and industrial wastewater. High protected surface area, self-cleaning under aeration, long service life.',
    targetKeyword: 'MBBR biofilter media',
    category: 'filter-media',
    intro:
      'MBBR media are small plastic carriers that move freely in an aerated tank while a biofilm grows on their protected internal surfaces. Because the carriers collide and scrub against each other, the biofilm stays at an active thickness instead of growing into a clogged mass, which is the failure mode that limits every fixed-film process. The result is a compact reactor with no backwashing and no blocking.',
    specs: [
      { item: 'Form', value: 'Small cylindrical or ring carriers with internal fins and cross walls' },
      { item: 'Material', value: 'HDPE, virgin and UV-stabilised' },
      { item: 'Density', value: 'Close to water, so the bed fluidises at modest aeration intensity' },
      { item: 'Surface', value: 'Protected internal area far higher than the outside profile suggests' },
      { item: 'Filling ratio', value: 'Set by the organic and ammonia load, not by a fixed rule' },
      { item: 'Selection inputs', value: 'Influent COD and ammonia load, target effluent, tank volume, aeration capacity' },
    ],
    materials: ['HDPE', 'HDPE with UV stabiliser'],
    applications: [
      'Municipal wastewater upgrading',
      'Industrial effluent with high COD or ammonia',
      'Nitrification and denitrification',
      'Retrofit of overloaded activated sludge plants',
      'Aquaculture and fish farming water treatment',
      'Landfill leachate treatment',
    ],
    comparison:
      'Against activated sludge, MBBR needs less tank volume for the same load and does not depend on sludge settleability, which is what makes it attractive for upgrading an overloaded plant. Against fixed media or trickling filters it does not block and never needs backwashing. Against ceramsite or sand biofilters it uses less space, but it needs a downstream solids separation step because biofilm sloughs off continuously.',
    faqs: [
      {
        q: 'What filling ratio should I use?',
        a: 'It follows the load, not a rule of thumb: the more COD or ammonia to be removed, the more protected surface is needed. Send the load and the tank volume and we will size the fill, because over-filling wastes aeration energy and abrades the media.',
      },
      {
        q: 'Why HDPE rather than PP or PVC?',
        a: 'Density. HDPE can be made to sit close to water so the bed mixes at low aeration intensity, and it stays tough and dimensionally stable for years in a wet, abrasive environment.',
      },
      {
        q: 'Does the biofilm clog the media?',
        a: 'No, that is the point of a moving bed. Continuous collision keeps the biofilm thin and active, and excess biomass sloughs off into the water, which is why a solids separation stage follows the reactor.',
      },
      {
        q: 'How is it different from ceramsite biofilter media?',
        a: 'Ceramsite is a fixed granular bed that traps solids and needs backwashing. MBBR media stay in suspension and never need backwashing. Ceramsite suits polishing and BAF duty; MBBR suits high-load biological treatment in a compact tank.',
      },
    ],
  },
];
