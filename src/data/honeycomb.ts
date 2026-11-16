import type { Product } from './products';

// 蜂窝陶瓷：2 个产品页（RTO 蓄热体 / 柴油颗粒捕集器载体）
// 说明：只写结构、工况与选型依据，不写具体通道密度、壁厚等数值

export const HONEYCOMB: Product[] = [
  {
    slug: 'rto-heat-exchange-honeycomb',
    name: 'RTO Honeycomb Heat Exchange Media',
    image: '/images/products/rto-heat-exchange-honeycomb.webp',
    title: 'RTO Honeycomb Ceramic Media | Regenerative Thermal Oxidiser Packing',
    h1: 'RTO Honeycomb Ceramic Heat Exchange Media',
    metaDescription:
      'Ceramic honeycomb heat exchange media for RTO units. High surface area at low pressure drop, thermal shock resistance, for VOC and odour abatement.',
    targetKeyword: 'RTO honeycomb media',
    category: 'honeycomb-ceramics',
    intro:
      'A regenerative thermal oxidiser works by storing heat in a ceramic bed on the way in and giving it back on the way out. The honeycomb geometry is what makes that practical: a straight-channel monolith gives a large surface area per cubic metre with a pressure drop that stays low even at high face velocity, and a cordierite or mullite body survives the rapid cycling that the switching valve imposes.',
    specs: [
      { item: 'Form', value: 'Straight-channel monolith blocks, stacked into the bed' },
      { item: 'Material', value: 'Cordierite and mullite; high-alumina grades for hotter duty' },
      { item: 'Channel density', value: 'Selected against pressure drop and fouling risk rather than picked at random' },
      { item: 'Thermal behaviour', value: 'Resists the cycling produced by valve switching' },
      { item: 'Installation', value: 'Stacked with a suitable support and sealing arrangement to stop bypass' },
      { item: 'Selection inputs', value: 'Gas flow, VOC loading, cycle time, allowable pressure drop, operating temperature' },
    ],
    materials: ['Cordierite', 'Mullite', 'High alumina'],
    applications: [
      'Regenerative thermal oxidisers',
      'VOC and odour abatement',
      'Heat recovery from hot exhaust gas',
      'Catalytic oxidiser support media',
    ],
    comparison:
      'Against ceramic random packing or saddles, honeycomb gives a much lower pressure drop for the same heat transfer duty, and pressure drop is the main operating cost of an RTO because it sets fan power. Against metal structured media, ceramic takes higher temperatures and does not oxidise. The trade-off is fouling: a straight-channel monolith blinds if the gas carries particulate or sticky condensate, so the duty has to be clean.',
    faqs: [
      {
        q: 'Why honeycomb instead of ceramic saddles in an RTO?',
        a: 'Pressure drop. A straight channel passes gas with far less resistance than a dumped bed for the same heat transfer area, and in an RTO that difference shows up directly in electricity consumption every hour the unit runs.',
      },
      {
        q: 'What blinds a honeycomb bed?',
        a: 'Particulate, sticky condensate and carry-over from the process. Because the channels are straight and small, anything that deposits on the wall stays there. If the exhaust carries dust or tarry material, the design needs a filter or a different media in the first layer.',
      },
      {
        q: 'Which material should I choose?',
        a: 'Cordierite covers most RTO duty with good thermal shock resistance at reasonable cost. Where peak temperature or cycling is more severe, mullite or a high-alumina body is the safer choice.',
      },
      {
        q: 'Can the blocks be replaced individually?',
        a: 'Yes. The bed is stacked from separate blocks, so damaged or fouled sections can be lifted out and replaced without renewing the whole bed, which is one reason the format is used rather than a monolithic structure.',
      },
    ],
  },
  {
    slug: 'dpf-cordierite-honeycomb',
    name: 'Cordierite DPF Substrate',
    image: '/images/products/dpf-cordierite-honeycomb.webp',
    title: 'Cordierite DPF Honeycomb Substrate | Diesel Particulate Filter Media',
    h1: 'Cordierite DPF Honeycomb Substrate',
    metaDescription:
      'Cordierite wall-flow honeycomb substrates for diesel particulate filters. High filtration efficiency, low back pressure and thermal shock resistance.',
    targetKeyword: 'cordierite DPF substrate',
    category: 'honeycomb-ceramics',
    intro:
      'A diesel particulate filter is a wall-flow device: the channels are alternately plugged, so exhaust is forced through the porous wall, and soot is trapped on the surface and inside the wall while gas passes through. The substrate has to combine high filtration efficiency with low back pressure and enough thermal shock resistance to survive regeneration, which is why cordierite — low expansion, inexpensive and well understood — is the default material for the duty.',
    specs: [
      { item: 'Form', value: 'Wall-flow honeycomb with alternately plugged channels' },
      { item: 'Material', value: 'Cordierite' },
      { item: 'Function', value: 'Soot filtration with periodic regeneration' },
      { item: 'Supply form', value: 'Bare substrate; wash coating and canning are separate steps' },
      { item: 'Selection inputs', value: 'Engine size, exhaust flow, soot load, regeneration strategy, back pressure limit' },
    ],
    materials: ['Cordierite'],
    applications: [
      'Diesel passenger car and light commercial DPF',
      'Off-road and construction equipment',
      'Stationary diesel generator aftertreatment',
      'Retrofit particulate filters',
    ],
    comparison:
      'Against silicon carbide substrates, cordierite is cheaper and has lower thermal expansion, but lower heat capacity and a lower thermal limit; silicon carbide is chosen for the heaviest duty and for high ash-loading applications. Against flow-through or partial-flow filters, wall-flow gives much higher filtration efficiency at the cost of a back pressure that has to be managed by the regeneration strategy.',
    faqs: [
      {
        q: 'Why is cordierite the default DPF material?',
        a: 'Low thermal expansion means it survives the sharp temperature gradients of regeneration without cracking, and it is inexpensive to extrude in volume. For most light and medium duty it is the economical answer.',
      },
      {
        q: 'When is silicon carbide preferred?',
        a: 'Where the thermal load or ash loading is high, or where the filter is large. Silicon carbide tolerates more heat and holds more ash before back pressure becomes a problem, at higher cost and with more demanding canning requirements.',
      },
      {
        q: 'Is the substrate supplied coated?',
        a: 'Normally as a bare substrate. Wash coating with a catalyst and canning into the housing are separate operations, and we will confirm exactly what is being supplied so it is not assumed.',
      },
      {
        q: 'What decides filter life?',
        a: 'Ash, not soot. Soot burns off in regeneration, but ash accumulates permanently and eventually raises back pressure beyond limit. That is why ash loading, not just engine size, is one of the design inputs.',
      },
    ],
  },
];
