import type { Product } from './products';

// 吸附剂 / 干燥剂：5 个产品页（活性氧化铝 + 分子筛 3A/4A/5A/13X）
// 只写型式、选择性、再生方式与选型依据，不写具体吸附容量等数值

export const ADSORBENTS: Product[] = [
  {
    slug: 'activated-alumina',
    name: 'Activated Alumina',
    title: 'Activated Alumina Supplier | Desiccant, Fluoride Removal & Claus Duty',
    h1: 'Activated Alumina',
    metaDescription:
      'Activated alumina balls for gas and liquid drying, fluoride removal, hydrogen peroxide purification and Claus catalyst support. Regenerable, mechanically strong.',
    targetKeyword: 'activated alumina',
    category: 'adsorbents',
    intro:
      'Activated alumina is the default desiccant in industrial gas treating, and it holds that position for practical reasons: it is mechanically strong enough to survive repeated regeneration, it does not break down into fines under thermal cycling, and it keeps working after being wetted. Its limitation is selectivity — it removes water well, and it removes other polar molecules too, which is either the point or a problem depending on the duty.',
    specs: [
      { item: 'Form', value: 'Spherical beads, high surface area, porous' },
      { item: 'Primary functions', value: 'Gas and liquid drying, fluoride removal, peroxide purification, catalyst support' },
      { item: 'Regeneration', value: 'Thermal regeneration with hot gas; cooling and repressurisation part of the cycle' },
      { item: 'Selectivity', value: 'Adsorbs polar molecules preferentially, water above all' },
      { item: 'Key selection inputs', value: 'Inlet water content, target dew point, cycle time, gas composition, allowable pressure drop' },
      { item: 'Related grades', value: 'Impregnated variants for chloride, mercury or specific contaminant duty on request' },
    ],
    materials: ['Activated alumina (spherical)', 'Impregnated grades on request'],
    applications: [
      'Compressed air and instrument air drying',
      'Natural gas dehydration',
      'Fluoride removal from drinking and industrial water',
      'Hydrogen peroxide purification and regeneration',
      'Catalyst and catalyst support in Claus units',
      'Dechlorination and arsenic removal duty',
    ],
    comparison:
      'Against silica gel, activated alumina tolerates liquid water contact better and holds up under more regeneration cycles, which is why it dominates compressed air and natural gas drying. Against molecular sieve it is cheaper and has higher water capacity in benign streams, but it does not give the sharp selectivity a sieve offers when CO2 or heavier components have to be excluded.',
    faqs: [
      {
        q: 'When is activated alumina enough, and when do I need a molecular sieve?',
        a: 'If the target is only water removal in a stream where co-adsorption does not matter, alumina is usually the economical answer. If the same bed must also remove CO2, or if co-adsorbing other components would damage the product or the downstream unit, a sieve with the right pore opening is needed.',
      },
      {
        q: 'How is the bed regenerated?',
        a: 'Thermally, with a hot dry gas stream, followed by cooling before the bed returns to service. Cycle length and regeneration temperature are set by the water loading and the dew point required — we size the bed from those inputs.',
      },
      {
        q: 'Does the bed need a support layer underneath?',
        a: 'Yes, in most vessels a graded inert ball layer separates the adsorbent from the outlet collector, filters fines and prevents the beads from migrating into the outlet.',
      },
      {
        q: 'Can it remove fluoride from water?',
        a: 'Yes, that is one of its established uses — the alumina is regenerated with a caustic wash rather than by heating. Send the water analysis and flow rate for bed sizing.',
      },
    ],
  },
  {
    slug: 'molecular-sieve-3a',
    name: 'Molecular Sieve 3A',
    title: '3A Molecular Sieve Supplier | Potassium Form Zeolite Desiccant',
    h1: '3A Molecular Sieve',
    metaDescription:
      '3A molecular sieve (potassium form) for drying cracked gas, olefins and ethanol where CO2 and heavier components must not be co-adsorbed. Regenerable zeolite.',
    targetKeyword: '3A molecular sieve',
    category: 'adsorbents',
    intro:
      'The 3A sieve is the drying option you choose when water is the only thing you are allowed to take out. Its pore opening admits water but excludes larger molecules, so CO2, H2S and heavier hydrocarbons pass through instead of being held on the bed. That makes it the standard choice for drying cracked gas, ethylene and ethanol streams where co-adsorption would cost you product or poison the bed.',
    specs: [
      { item: 'Type', value: 'Type A zeolite in the potassium form' },
      { item: 'Pore opening', value: 'Smallest of the common A-type sieves — water admitted, larger molecules excluded' },
      { item: 'Behaviour', value: 'Low co-adsorption of CO2 and heavier components compared with 4A and 13X' },
      { item: 'Regeneration', value: 'Thermal regeneration with hot dry gas, or pressure-swing where the duty allows' },
      { item: 'Key selection inputs', value: 'Inlet water, target dew point, stream composition, cycle time, allowable pressure drop' },
      { item: 'Form', value: 'Spherical beads and pellets' },
    ],
    materials: ['Zeolite 3A (potassium form)', 'Binder-bound beads'],
    applications: [
      'Cracked gas and olefin drying',
      'Ethanol and solvent dehydration',
      'Natural gas drying where CO2 must not be co-adsorbed',
      'Insulating glass and refrigerant drying',
      'Drying of reactive streams sensitive to co-adsorption',
    ],
    comparison:
      'Compared with 4A, the 3A sieve removes less from the stream — deliberately. Its value is selectivity: drying without stripping CO2 or recovering heavier molecules onto the bed. If your process actually wants simultaneous CO2 removal, 4A or 13X is the correct choice instead.',
    faqs: [
      {
        q: 'Why choose 3A rather than 4A for drying?',
        a: 'Because 4A will also hold CO2 and other small molecules, which may be unacceptable in olefin or ethanol duty. 3A dries the stream while leaving those components in the gas.',
      },
      {
        q: 'Can it be regenerated in place?',
        a: 'Yes. Hot dry gas regeneration is standard, with cooling and repressurisation as part of the cycle. Bed design sets the cycle length.',
      },
      {
        q: 'Does it work in pressure-swing duty?',
        a: 'It can, where the water loading and cycle are compatible with PSA operation. Thermal regeneration remains more common for deep drying.',
      },
    ],
  },
  {
    slug: 'molecular-sieve-4a',
    name: 'Molecular Sieve 4A',
    title: '4A Molecular Sieve Supplier | Sodium Form Zeolite for Drying and CO2 Removal',
    h1: '4A Molecular Sieve',
    metaDescription:
      '4A molecular sieve (sodium form) for gas and liquid drying, CO2 and H2S removal, refrigerant drying and static dehydration. Regenerable zeolite beads.',
    targetKeyword: '4A molecular sieve',
    category: 'adsorbents',
    intro:
      'The 4A sieve is the general-purpose member of the family: a wider pore than 3A, so it dries and also takes out CO2, H2S and other small polar molecules in the same pass. Where a plant needs one bed to do both jobs, this is usually the grade specified.',
    specs: [
      { item: 'Type', value: 'Type A zeolite in the sodium form' },
      { item: 'Pore opening', value: 'Wider than 3A — admits water plus small molecules such as CO2 and H2S' },
      { item: 'Behaviour', value: 'Combined drying and small-molecule removal in one bed' },
      { item: 'Regeneration', value: 'Thermal regeneration; pressure swing where applicable' },
      { item: 'Key selection inputs', value: 'Water and CO2 loading, target dew point, stream composition, cycle time' },
      { item: 'Form', value: 'Spherical beads and pellets' },
    ],
    materials: ['Zeolite 4A (sodium form)', 'Binder-bound beads'],
    applications: [
      'Natural gas drying and sweetening',
      'Refrigerant and HVAC dehydration',
      'Air and instrument gas drying',
      'CO2 and H2S removal from light streams',
      'Static dehydration of packaged equipment',
      'Liquid drying of solvents and monomers',
    ],
    comparison:
      'Against 3A it removes more but is less selective; against 13X it has a smaller pore and lower capacity for bulky molecules such as mercaptans and heavier hydrocarbons. For most drying-plus-CO2 duties in light gas service, 4A is the economical middle ground.',
    faqs: [
      {
        q: 'Will 4A remove H2S as well as water?',
        a: 'It can hold H2S along with water, which is useful in light gas polishing but is not a substitute for a dedicated sweetening process where sulphur loading is significant.',
      },
      {
        q: 'How do I choose between 4A and 13X?',
        a: 'By molecular size and loading. 13X has the wider pore and higher capacity for larger molecules such as mercaptans; 4A is the better economic fit for light-gas drying with modest CO2.',
      },
      {
        q: 'What bead size should I use?',
        a: 'It follows from vessel diameter, allowable pressure drop and mass-transfer requirements. Send the bed geometry and flow and we will recommend a size distribution.',
      },
    ],
  },
  {
    slug: 'molecular-sieve-5a',
    name: 'Molecular Sieve 5A',
    title: '5A Molecular Sieve Supplier | PSA Oxygen and n-Paraffin Separation',
    h1: '5A Molecular Sieve',
    metaDescription:
      '5A molecular sieve (calcium form) for PSA oxygen generation, n-paraffin separation and combined drying with CO2 and sulphur removal. Regenerable zeolite.',
    targetKeyword: '5A molecular sieve',
    category: 'adsorbents',
    intro:
      'The 5A sieve is the calcium form, with a pore wide enough to take in straight-chain molecules while excluding branched and aromatic ones. Two duties dominate its use: separating normal paraffins from branched isomers, and producing oxygen from air by adsorbing nitrogen in a pressure-swing cycle.',
    specs: [
      { item: 'Type', value: 'Type A zeolite in the calcium form' },
      { item: 'Pore opening', value: 'Wider than 4A — admits straight-chain molecules, excludes branched and aromatic' },
      { item: 'Distinguishing behaviour', value: 'Selective uptake of n-paraffins and of nitrogen in air separation' },
      { item: 'Regeneration', value: 'Pressure swing for PSA duty; thermal regeneration for drying and separation beds' },
      { item: 'Key selection inputs', value: 'Duty type, feed composition, cycle, purity target, allowable pressure drop' },
      { item: 'Form', value: 'Spherical beads and pellets' },
    ],
    materials: ['Zeolite 5A (calcium form)', 'Binder-bound beads'],
    applications: [
      'PSA and VPSA oxygen generation',
      'n-Paraffin / iso-paraffin separation',
      'Hydrogen purification by PSA',
      'Combined drying with CO2 and sulphur removal',
      'Air prepurification ahead of cryogenic separation',
    ],
    comparison:
      'Compared with 4A, 5A takes in larger linear molecules, which is why it can separate n-paraffins at all. Compared with 13X in PSA oxygen duty, 5A is the conventional nitrogen-selective choice while 13X is preferred where CO2 and water loading in the feed is high.',
    faqs: [
      {
        q: 'Is 5A the right sieve for PSA oxygen?',
        a: 'It is one of the two standard choices, the other being 13X. Which suits your plant depends on feed air quality, CO2 and water loading, and the purity and recovery you need — tell us those and we will advise.',
      },
      {
        q: 'What makes it useful for n-paraffin separation?',
        a: 'The pore admits straight-chain molecules and excludes branched and aromatic ones, so normal paraffins are held while the rest pass through. The bed is then regenerated to recover them.',
      },
      {
        q: 'Can one bed do drying and sulphur removal?',
        a: 'In light service, yes — 5A holds water and small sulphur species together. Where sulphur loading is high, a dedicated guard bed protects the sieve instead.',
      },
    ],
  },
  {
    slug: 'molecular-sieve-13x',
    name: 'Molecular Sieve 13X',
    title: '13X Molecular Sieve Supplier | CO2, Water and Mercaptan Removal',
    h1: '13X Molecular Sieve',
    metaDescription:
      '13X molecular sieve (sodium X type) for air prepurification, bulk CO2 and water removal, mercaptan and THT removal, and natural gas treating. Regenerable zeolite.',
    targetKeyword: '13X molecular sieve',
    category: 'adsorbents',
    intro:
      'The 13X sieve has the widest pore of the common grades, which gives it capacity for molecules the A-types cannot hold: mercaptans, THT, heavier hydrocarbons and bulk CO2. It is the standard media for air prepurification ahead of cryogenic separation, and for gas treating where the contaminant is bigger than water.',
    specs: [
      { item: 'Type', value: 'Sodium form type X zeolite' },
      { item: 'Pore opening', value: 'Widest of the common grades — takes in bulky molecules as well as water' },
      { item: 'Distinguishing behaviour', value: 'Higher capacity for CO2, mercaptans and heavier species than 4A or 5A' },
      { item: 'Regeneration', value: 'Thermal regeneration; pressure swing in prepurification duty' },
      { item: 'Key selection inputs', value: 'Contaminant type and loading, CO2 and water content, cycle, purity target' },
      { item: 'Form', value: 'Spherical beads' },
      { item: 'Variant', value: 'Low-silica and high-capacity grades available on request' },
    ],
    materials: ['Zeolite 13X (sodium X)', 'Binder-bound beads'],
    applications: [
      'Air prepurification before cryogenic air separation',
      'Bulk CO2 and water removal from natural gas',
      'Mercaptan and odourant removal from gas streams',
      'Hydrogen and syngas purification',
      'Drying of streams containing heavier hydrocarbons',
      'Guard beds ahead of cryogenic exchangers',
    ],
    comparison:
      'Compared with 4A, 13X holds larger molecules and more CO2 per unit of bed, at a higher cost. Its advantage disappears in clean light-gas drying, where 4A does the job for less; it earns its cost where mercaptans, bulk CO2 or heavy ends have to come out.',
    faqs: [
      {
        q: 'Why is 13X used in air prepurification?',
        a: 'Because it removes both water and CO2 down to the levels a cryogenic exchanger needs, and it tolerates the cyclic pressure-swing duty those units run. Residual CO2 freezing in the cold box is the failure it prevents.',
      },
      {
        q: 'Can it remove odourant from natural gas?',
        a: 'Yes — 13X is used for THT and mercaptan removal where the gas has to be odour-free downstream. Loading and cycle design come from the sulphur content of the feed.',
      },
      {
        q: 'How does it compare on cost?',
        a: 'It is the more expensive of the common grades, so it is specified where its capacity for larger molecules is actually needed rather than as a general-purpose desiccant.',
      },
    ],
  },
];
