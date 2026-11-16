import type { Product } from './products';

// 吸附剂 / 干燥剂：5 个产品页（活性氧化铝 + 分子筛 3A/4A/5A/13X）
// 只写型式、选择性、再生方式与选型依据，不写具体吸附容量等数值

export const ADSORBENTS: Product[] = [
  {
    slug: 'activated-alumina',
    image: '/images/products/activated-alumina.webp',
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
    image: '/images/products/molecular-sieve-3a.webp',
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
    image: '/images/products/molecular-sieve-4a.webp',
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
    image: '/images/products/molecular-sieve-5a.webp',
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
    image: '/images/products/molecular-sieve-13x.webp',
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
  {
    slug: 'carbon-molecular-sieve',
    name: 'Carbon Molecular Sieve (CMS)',
    image: '/images/products/carbon-molecular-sieve.webp',
    title: 'Carbon Molecular Sieve (CMS) | PSA Nitrogen Generation Media',
    h1: 'Carbon Molecular Sieve (CMS)',
    metaDescription:
      'Carbon molecular sieve for PSA nitrogen generators. Kinetic separation of oxygen from nitrogen, high hardness and long cycle life for on-site nitrogen production.',
    targetKeyword: 'carbon molecular sieve',
    category: 'adsorbents',
    intro:
      'A carbon molecular sieve does not separate oxygen and nitrogen by size in the way a zeolite does. It separates them by speed: oxygen diffuses into the carbon pores much faster than nitrogen, so a short adsorption cycle takes the oxygen out and leaves a nitrogen-rich gas behind. That kinetic mechanism is why CMS, and not a zeolite, is the standard media for PSA nitrogen generators.',
    specs: [
      { item: 'Form', value: 'Black spherical or pelletised carbon' },
      { item: 'Function', value: 'Kinetic separation of oxygen from nitrogen in PSA cycles' },
      { item: 'Regeneration', value: 'Pressure swing only; no heat required' },
      { item: 'Feed treatment', value: 'Air must be dried and oil-free ahead of the bed' },
      { item: 'Purity and recovery', value: 'Trade against each other, and both are set by cycle design' },
      { item: 'Selection inputs', value: 'Required nitrogen purity, flow rate, operating pressure, cycle time' },
    ],
    materials: ['Carbon molecular sieve, spherical', 'Carbon molecular sieve, pelletised'],
    applications: [
      'PSA nitrogen generators',
      'On-site nitrogen for food packaging',
      'Laser cutting and heat treating atmospheres',
      'Chemical blanketing and inerting',
      'Pharmaceutical and electronics nitrogen supply',
    ],
    comparison:
      'Against zeolite 5A or 13X, carbon sieve gives nitrogen rather than oxygen: zeolites hold nitrogen preferentially and are used to produce oxygen, while carbon takes up oxygen faster and is used for nitrogen. Against membrane separation, PSA with CMS reaches higher purity at modest scale, while membranes win where moderate purity and large flow are acceptable and simplicity matters more than recovery.',
    faqs: [
      {
        q: 'Why carbon and not zeolite for nitrogen?',
        a: 'Because the mechanism is different. A zeolite holds nitrogen more strongly than oxygen, so the product is oxygen. Carbon molecular sieve takes up oxygen faster than nitrogen, so the product is nitrogen. Running a nitrogen generator on zeolite performs poorly by comparison.',
      },
      {
        q: 'What purity can be reached?',
        a: 'Standard PSA plants reach high purity routinely, but every step up costs recovery, and therefore feed air and power. Tell us the purity the process actually needs rather than the highest figure quoted elsewhere, and the plant will be smaller and cheaper.',
      },
      {
        q: 'Why does the feed air have to be dried?',
        a: 'Water is adsorbed strongly and blocks the pores, and compressor oil carries over with it. A dryer and coalescing filter ahead of the CMS bed is not optional; it is what decides how long the bed lasts.',
      },
      {
        q: 'How long does a CMS bed last?',
        a: 'Several years in normal service. What shortens it is contamination and mechanical attrition rather than the carbon itself, which is why pre-treatment and a proper fill procedure matter more than the grade chosen.',
      },
    ],
  },
  {
    slug: 'molecular-sieve-13x-hp',
    name: '13X HP Molecular Sieve',
    image: '/images/products/molecular-sieve-13x-hp.webp',
    title: '13X HP Molecular Sieve | PSA Oxygen and Air Prepurification',
    h1: '13X HP Molecular Sieve',
    metaDescription:
      'High performance 13X molecular sieve beads for PSA and VPSA oxygen plants, medical oxygen concentrators and air prepurification. High capacity, low attrition.',
    targetKeyword: '13X HP molecular sieve',
    category: 'adsorbents',
    intro:
      'The HP grade of 13X has the same faujasite structure as standard 13X, made to a tighter specification: higher capacity, better crush strength and lower attrition in a bed that cycles every few seconds. It is specified where the cycle is fast and the bed has to last, which means PSA and VPSA oxygen, medical concentrators, and the prepurifier that protects a cryogenic air separation unit.',
    specs: [
      { item: 'Form', value: 'Spherical beads' },
      { item: 'Structure', value: 'Type X faujasite, sodium form' },
      { item: 'Function', value: 'Water, CO2 and hydrocarbon removal; nitrogen adsorption in oxygen production' },
      { item: 'Strength', value: 'Higher crush strength and lower attrition than standard 13X' },
      { item: 'Cycle', value: 'Built for short-cycle PSA and VPSA duty' },
      { item: 'Selection inputs', value: 'Flow rate, pressure, cycle time, target water and CO2 outlet, purity required' },
    ],
    materials: ['13X HP beads'],
    applications: [
      'PSA and VPSA oxygen plants',
      'Medical oxygen concentrators',
      'Air prepurification ahead of cryogenic separation',
      'CO2 and water removal from air and natural gas',
      'Hydrocarbon guard beds',
    ],
    comparison:
      'Against standard 13X, the HP grade costs more and earns it back in bed life and stable capacity under fast cycling. Against lithium-exchanged sieve, 13X HP is cheaper and more tolerant of moisture excursions, while LiX holds more nitrogen capacity and therefore shrinks the bed in large oxygen plants. Which of the two is right depends on plant size and on how well the feed is pre-treated.',
    faqs: [
      {
        q: '13X HP or LiX for an oxygen plant?',
        a: 'For a large VPSA plant with good pre-treatment, LiX packs more nitrogen capacity per cubic metre and reduces bed size. For smaller plants, medical concentrators, or feeds where moisture excursions are possible, 13X HP is the more forgiving and more economical choice.',
      },
      {
        q: 'How is it different from standard 13X?',
        a: 'Same crystal, tighter specification: higher capacity, better crush strength, lower attrition. In a slow thermal swing dryer the difference is small. In a fast PSA cycle it decides whether the bed holds its capacity or slowly turns into dust.',
      },
      {
        q: 'What has to be removed before the sieve bed?',
        a: 'Water and oil aerosol. The sieve will take water, but every kilogram of water it takes is capacity not available for the real duty, and liquid water damages the beads. A dryer and coalescer upstream pay for themselves.',
      },
      {
        q: 'Beads or pellets?',
        a: 'Beads for PSA and VPSA, for better flow distribution and lower pressure drop. Pellets appear in some gas drying duties where surface-to-volume ratio matters more than pressure drop.',
      },
    ],
  },
  {
    slug: 'potassium-permanganate-activated-alumina',
    name: 'Potassium Permanganate on Alumina',
    image: '/images/products/potassium-permanganate-activated-alumina.webp',
    title: 'Potassium Permanganate Impregnated Alumina | H2S and Odour Removal',
    h1: 'Potassium Permanganate Impregnated Activated Alumina',
    metaDescription:
      'Potassium permanganate on activated alumina for H2S, mercaptan and odour removal from gas and air. Oxidative media with high removal efficiency, non-regenerable.',
    targetKeyword: 'potassium permanganate activated alumina',
    category: 'adsorbents',
    intro:
      'Plain activated alumina adsorbs; potassium permanganate on alumina oxidises. The difference matters when the contaminant is hydrogen sulphide, a mercaptan or an odour compound, because oxidation converts it into a sulphate that stays in the bed instead of coming back off on the next cycle. It is a consumable rather than a regenerable adsorbent, and it is specified for exactly that reason: it removes the last traces instead of cycling them.',
    specs: [
      { item: 'Form', value: 'Spherical beads with permanganate impregnation' },
      { item: 'Base', value: 'Activated alumina' },
      { item: 'Function', value: 'Oxidative removal of H2S, mercaptans, odours and some nitrogen oxides' },
      { item: 'Regeneration', value: 'Not regenerable; the media is consumed and replaced' },
      { item: 'Bed life', value: 'Set by the total mass of contaminant to be removed, not by cycle time' },
      { item: 'Humidity', value: 'Oxidation needs a humid surface; very dry or condensing gas both hurt performance' },
      { item: 'Selection inputs', value: 'Contaminant type and concentration, flow, humidity, required outlet level' },
    ],
    materials: ['Potassium permanganate on activated alumina'],
    applications: [
      'Sour gas polishing downstream of amine units',
      'Odour control for air and ventilation streams',
      'Sewage and wastewater off-gas treatment',
      'Hydrogen sulphide removal in biogas and landfill gas',
      'Guard beds ahead of molecular sieve or catalyst',
    ],
    comparison:
      'Against plain activated alumina, the impregnated grade removes H2S and mercaptans that plain alumina only partly holds and then releases. Against a zinc oxide guard bed it works at ambient temperature and at lower cost for trace duty, while zinc oxide is the better answer for bulk sulphur removal at high concentration. Against activated carbon it avoids the fire risk that spent carbon carries when loaded with sulphur compounds.',
    faqs: [
      {
        q: 'Can it be regenerated?',
        a: 'No. The permanganate is consumed as it oxidises the contaminant, and the bed is replaced at breakthrough. That is normal for an oxidative medium, and it is why the bed is sized on total contaminant load rather than on cycle time.',
      },
      {
        q: 'What happens to the spent media?',
        a: 'It contains manganese compounds and sulphate, so it is handled as chemical waste under local rules. We can tell you what the spent bed will contain, but disposal is governed by where you operate.',
      },
      {
        q: 'Why does humidity matter so much?',
        a: 'The oxidation needs a humid surface to proceed. Very dry gas gives poor performance, and condensing water blinds the bed. There is a workable humidity window, and it should be checked before the bed is designed.',
      },
      {
        q: 'Is it suitable for biogas?',
        a: 'Yes, for polishing after bulk desulphurisation. Biogas carries water and trace compounds, so the bed normally sits after drying, and its life is set by the residual H2S loading it sees.',
      },
    ],
  },
];
