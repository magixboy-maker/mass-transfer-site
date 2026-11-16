// 新增品类（栏目）元信息：瓷球 / 吸附剂 / 滤料
// 说明：规格参数暂不写具体数值（杰克 2026-11-16 决定），只写型式、功能与选型依据

export interface CategoryMeta {
  slug: string;
  label: string;
  title: string;
  description: string;
  h1: string;
  sub: string;
  intro: string[];
  relatedTitle: string;
  related: { label: string; href: string; desc: string }[];
}

export const NEW_CATEGORIES: CategoryMeta[] = [
  {
    slug: 'ceramic-balls',
    label: 'Ceramic Balls',
    title: 'Ceramic Ball Manufacturer | Inert Alumina, High Alumina & Porous Balls',
    description:
      'Inert alumina ceramic balls, high alumina balls, porous ceramic balls, grinding and refractory media for catalyst bed support, hold-down and flow distribution.',
    h1: 'Ceramic Balls & Support Media',
    sub:
      'Inert ceramic balls sit under and above a catalyst bed doing the work no catalyst can: carrying the bed load, filtering fines, redistributing gas and liquid, and keeping the catalyst out of the outlet collector. The grade decides whether that support interferes with the process chemistry or not.',
    intro: [
      'A catalyst bed rests on something. In most reactors and columns that something is a graded layer of ceramic balls — coarse and strong at the bottom, finer and closer to the catalyst at the top, so that fines are filtered out before they blind the catalyst and the flow is spread before it enters the bed.',
      'Ceramic balls are also used as hold-down media above a bed, as inert packing in drying towers and acid towers, and as heat storage or grinding media in other duties entirely. Which grade is right depends on what the ball has to resist: bed load, thermal cycling, acid attack, or abrasion.',
      'We supply inert alumina, high alumina, porous and refractory grades, and we grade the layers against the catalyst you are loading rather than selling a single ball for every duty.',
    ],
    relatedTitle: 'Related to ceramic balls',
    related: [
      { label: 'Support Plates', href: '/tower-internals/support-plates/', desc: 'The structural support under the ball layer and the packing bed.' },
      { label: 'Ceramic Random Packing', href: '/random-packing/', desc: 'Raschig rings, pall rings and saddles in the same ceramic family.' },
      { label: 'Activated Alumina', href: '/adsorbents/activated-alumina/', desc: 'Porous alumina used as a desiccant rather than as inert support.' },
    ],
  },
  {
    slug: 'adsorbents',
    label: 'Adsorbents & Desiccants',
    title: 'Activated Alumina & Molecular Sieve Supplier | Desiccants for Gas and Liquid',
    description:
      'Activated alumina and molecular sieve 3A, 4A, 5A and 13X for gas drying, CO2 and H2S removal, fluoride removal and PSA duty. Regenerable adsorbents.',
    h1: 'Activated Alumina & Molecular Sieves',
    sub:
      'Adsorbents do the part of gas treating that absorption and distillation cannot: pulling water, CO2, sulphur compounds or fluoride down to parts-per-million levels, then giving them up again on regeneration so the bed can be used for years.',
    intro: [
      'Two families cover most of this duty. Activated alumina is the workhorse desiccant and fluoride-removal medium — cheap, mechanically strong, and tolerant of the cycling that bed regeneration imposes. Molecular sieves are zeolites with a defined pore opening, which lets you dry a stream without also adsorbing the components you want to keep.',
      'Choosing between them is mostly about selectivity and regeneration. If you only need water out and nothing else matters, activated alumina is usually enough. If the same bed must also remove CO2, or if the stream contains components that would be damaged by co-adsorption, a sieve with the right pore opening is the only answer.',
      'We supply both, and we size the bed against your inlet condition, target dew point and cycle time rather than quoting a catalogue grade.',
    ],
    relatedTitle: 'Related to adsorbents',
    related: [
      { label: 'Inert Alumina Ceramic Ball', href: '/ceramic-balls/inert-alumina-ceramic-ball/', desc: 'Inert support layer beneath an adsorbent or catalyst bed.' },
      { label: 'Ceramic Structured Packing', href: '/structured-packing/ceramic-structured-packing/', desc: 'Acid-resistant packing for the drying towers these beds sit in.' },
      { label: 'Liquid Distributors', href: '/tower-internals/liquid-distributors/', desc: 'Where the duty is absorption rather than adsorption.' },
    ],
  },
  {
    slug: 'filter-media',
    label: 'Filter Media',
    title: 'Ceramic Sand & Ceramsite Filter Media | Water and Wastewater Filtration',
    description:
      'Ceramic sand and ceramsite filter media for potable water, wastewater and biofiltration. Durable granular media with high surface area and backwash stability.',
    h1: 'Ceramic Sand & Ceramsite Filter Media',
    sub:
      'Granular media for water and wastewater treatment: hard, chemically stable, and heavy enough to survive backwashing without washing out of the bed.',
    intro: [
      'Filter media look like a commodity until a bed starts washing out, cementing, or losing depth after a few backwash cycles. What separates a good medium from a cheap one is not the appearance but the combination of hardness, uniformity and surface character.',
      'Ceramic sand is used where a dense, hard medium is needed for suspended solids removal in potable and industrial water. Ceramsite is used for the same duty and, because of its porous surface, as a biofilm carrier in biological treatment.',
      'We supply both, together with support gravel grading where the bed design calls for it.',
    ],
    relatedTitle: 'Related to filter media',
    related: [
      { label: 'Ceramic Balls', href: '/ceramic-balls/', desc: 'Dense ceramic media for support layers and flow distribution.' },
      { label: 'Mist Eliminators', href: '/mist-eliminator/', desc: 'Downstream droplet removal after scrubbing and washing.' },
      { label: 'Applications', href: '/applications/', desc: 'Wastewater, flue gas and water treatment duties.' },
    ],
  },
];
