import type { Product } from './products';

// 瓷球 / 支撑介质：5 个产品页
// 规格只写型式与选型依据，不写具体数值（待工厂数据回填）

export const CERAMIC_BALLS: Product[] = [
  {
    slug: 'inert-alumina-ceramic-ball',
    image: '/images/products/inert-alumina-ceramic-ball.webp',
    name: 'Inert Alumina Ceramic Ball',
    title: 'Inert Alumina Ceramic Ball | Catalyst Bed Support Media Supplier',
    h1: 'Inert Alumina Ceramic Balls',
    metaDescription:
      'Inert alumina ceramic balls for catalyst bed support, hold-down and flow distribution in reactors, columns and acid towers. Low porosity, chemically inert, graded layers.',
    targetKeyword: 'inert alumina ceramic ball',
    category: 'ceramic-balls',
    intro:
      'The inert ball layer is the least glamorous part of a reactor, and the one that decides whether the catalyst above it lasts its design cycle. Its jobs are to carry the bed load, filter fines before they blind the catalyst, spread gas and liquid across the section, and stay chemically silent while doing all of it. We supply inert alumina balls graded to the catalyst and the vessel, not a single grade for every duty.',
    specs: [
      { item: 'Form', value: 'Solid spheres, low porosity, non-absorbent' },
      { item: 'Function', value: 'Bed support, hold-down layer, flow redistribution, fine filtration' },
      { item: 'Grades', value: 'Standard inert and high alumina grades; porous grade listed separately' },
      { item: 'Grading', value: 'Multi-layer (coarse to fine) set against the catalyst size and vessel outlet' },
      { item: 'Key selection inputs', value: 'Bed load, process fluid, operating temperature, catalyst particle size' },
      { item: 'Typical arrangement', value: 'Coarse balls on the outlet collector, graduating up to a fine layer under the catalyst' },
    ],
    materials: ['Inert alumina ceramic', 'High alumina ceramic', 'Porcelain / stoneware grade'],
    applications: [
      'Catalyst bed support in hydrotreaters, reformers and converters',
      'Hold-down layers above catalyst beds',
      'Sulphuric acid drying and absorption towers',
      'Claus unit and sulphur recovery reactors',
      'Gas and liquid filters, column bottoms, distillation reboilers',
    ],
    comparison:
      'A graded inert ball layer does what a support grid cannot: it filters fines, spreads flow and protects the catalyst from thermal and mechanical shock. It costs more than a bare grid, adds height and some pressure drop, and has to be removed by vacuum or manually at turnaround — which is why the grading has to be right the first time.',
    faqs: [
      {
        q: 'How many layers and what sizes should the support bed have?',
        a: 'The grading works upward from the outlet: coarse balls to carry load and leave free drainage, graduating to a finer layer that still passes gas but retains the catalyst. We set the layers from your catalyst size and vessel outlet detail rather than quoting a fixed grading.',
      },
      {
        q: 'What is the difference between inert and high alumina balls?',
        a: 'Alumina content governs refractoriness, crush strength and resistance to chemical attack. High alumina grades are chosen for higher temperature duty and heavier beds; standard inert grades cover the majority of support and hold-down applications.',
      },
      {
        q: 'Does porosity matter for a support ball?',
        a: 'Yes. A low-porosity ball will not soak up process liquid or absorb contaminants, so it stays inert and keeps its strength. Where absorption or a rough surface is actually wanted — for filtration or as a catalyst carrier — the porous grade is the correct choice instead.',
      },
      {
        q: 'Can the balls be re-used at the next catalyst change?',
        a: 'Often yes, if they are screened, washed free of fines and checked for breakage. We can quote replacement layers and screen the existing charge so only the damaged fraction is replaced.',
      },
    ],
  },
  {
    slug: 'high-alumina-ball',
    image: '/images/products/high-alumina-ball.webp',
    name: 'High Alumina Ball',
    title: 'High Alumina Ball Manufacturer | Refractory Grade Support Media',
    h1: 'High Alumina Balls',
    metaDescription:
      'High alumina balls for heavy catalyst beds, high temperature reactors and refractory duty. Higher crush strength and refractoriness than standard inert grades.',
    targetKeyword: 'high alumina ball',
    category: 'ceramic-balls',
    intro:
      'When the bed is heavy, the temperature is high, or the service involves thermal cycling that cracks ordinary porcelain, the support layer has to be made of something better. High alumina balls trade cost for crush strength and refractoriness, and they are the grade to specify where a standard inert ball would deform, spall or crush into fines.',
    specs: [
      { item: 'Form', value: 'Solid spheres, dense, low porosity' },
      { item: 'Grade', value: 'High alumina refractory grade' },
      { item: 'Compared with inert grade', value: 'Higher crush strength, higher service temperature, better thermal shock tolerance' },
      { item: 'Key selection inputs', value: 'Bed weight, operating and regeneration temperature, thermal cycling, fluid chemistry' },
      { item: 'Typical use', value: 'Bottom layers of deep beds, high temperature reactors, hot gas duty' },
    ],
    materials: ['High alumina ceramic', 'Mullite-corundum type bodies'],
    applications: [
      'Deep catalyst beds with high bottom load',
      'High temperature reactors and converters',
      'Regeneration cycles with repeated thermal shock',
      'Refractory and heat storage duty',
      'Support layers beneath reforming and shift catalysts',
    ],
    comparison:
      'A high alumina ball costs more per cubic metre than a standard inert ball and is unnecessary in ordinary support duty. It earns the premium where the load or the temperature would break a cheaper grade — replacing a crushed support layer at a turnaround costs far more than the difference in media price.',
    faqs: [
      {
        q: 'When should I specify high alumina instead of inert alumina?',
        a: 'When the bottom layer carries a deep, heavy bed, when service or regeneration temperature is high, or when the vessel sees repeated thermal cycling. Below those conditions a standard inert grade is usually the economical choice.',
      },
      {
        q: 'Can high alumina balls be mixed with inert balls in one bed?',
        a: 'Yes, and it is common practice: the heaviest grade at the bottom where load is greatest, graduating to standard inert balls higher up. We design the layers together.',
      },
      {
        q: 'Do they resist acid service?',
        a: 'Alumina is not the right answer for strong acid duty — silica-bearing ceramics or other materials are used there. Tell us the medium and we will advise on the correct body rather than sell an unsuitable grade.',
      },
    ],
  },
  {
    slug: 'porous-ceramic-ball',
    image: '/images/products/porous-ceramic-ball.webp',
    name: 'Porous Ceramic Ball',
    title: 'Porous Ceramic Ball | Open Pore Support and Catalyst Carrier Media',
    h1: 'Porous (Open Pore) Ceramic Balls',
    metaDescription:
      'Porous ceramic balls with open structure for gas filtration, flow distribution and as a catalyst carrier base. Higher surface area than dense inert balls.',
    targetKeyword: 'porous ceramic ball',
    category: 'ceramic-balls',
    intro:
      'A dense inert ball is designed to do nothing. A porous ceramic ball is designed to do something: its open structure gives it surface area and permeability, which makes it useful for capturing dust and mist, for spreading two-phase flow, and as the carrier body on which catalysts are deposited. The same porosity that makes it useful also makes it weaker, so it belongs where the load is moderate.',
    specs: [
      { item: 'Form', value: 'Spheres with open (interconnected) porosity' },
      { item: 'Distinction', value: 'Permeable body with surface area, unlike low-porosity inert balls' },
      { item: 'Functions', value: 'Gas filtration and demisting, flow distribution, catalyst carrier base, packed bed support where load is light' },
      { item: 'Key selection inputs', value: 'Contaminant loading, allowable pressure drop, bed load, whether the ball is to be impregnated' },
      { item: 'Note on strength', value: 'Lower crush strength than dense grades — do not use as the bottom layer of a deep bed' },
    ],
    materials: ['Porous alumina ceramic', 'Alumina-silicate ceramic'],
    applications: [
      'Dust and mist capture in gas streams',
      'Top layer of catalyst beds where filtration matters more than load',
      'Catalyst carrier base for impregnation',
      'Distributing two-phase flow over a section',
      'Pre-filters ahead of high-efficiency media',
    ],
    comparison:
      'Choose a porous ball when the duty is filtration, distribution or catalyst support; choose a dense inert or high alumina ball when the duty is carrying load. Using a porous grade at the bottom of a deep bed is the classic mistake — it crushes, and the fines it releases blind the bed it was meant to protect.',
    faqs: [
      {
        q: 'Porous or dense — how do I decide?',
        a: 'Ask what the layer is for. If it carries weight, dense. If it filters, spreads flow, or acts as a carrier, porous. If both are needed, use a dense graded layer at the bottom and a porous layer above it.',
      },
      {
        q: 'Can the balls be supplied pre-impregnated?',
        a: 'The carrier body can be supplied for your own impregnation route. Tell us what is being deposited and the service conditions, and we will discuss the suitable body rather than assume.',
      },
      {
        q: 'Will a porous layer increase pressure drop?',
        a: 'It can, and that has to be checked against the process allowance — a permeable body is more restrictive than an open grid. We size the layer depth against your allowable pressure drop.',
      },
    ],
  },
  {
    slug: 'grinding-ball',
    image: '/images/products/grinding-ball.webp',
    name: 'Grinding Ball',
    title: 'Alumina Grinding Ball | Wear Resistant Ceramic Mill Media',
    h1: 'Alumina Grinding Balls',
    metaDescription:
      'Wear resistant alumina grinding balls for ball mills and attritors. High density and low wear loss for mineral, ceramic and chemical grinding.',
    targetKeyword: 'alumina grinding ball',
    category: 'ceramic-balls',
    intro:
      'Grinding media wear shows up twice in the cost of a mill: once when you buy the balls, and continuously as contamination in the product and as downtime to top up the charge. High alumina grinding balls are specified where iron contamination is unacceptable and where wear life decides the economics of the mill.',
    specs: [
      { item: 'Form', value: 'Solid spheres, high density, fine-grained body' },
      { item: 'Duty', value: 'Grinding and dispersion media in ball mills, attritors and stirred mills' },
      { item: 'Selection basis', value: 'Wear rate, density, contamination tolerance, mill type and product fineness' },
      { item: 'Alternative', value: 'High alumina refractory and inert grades for non-grinding duty' },
      { item: 'Note', value: 'Media size and charge are set from mill volume, feed size and target fineness' },
    ],
    materials: ['High alumina ceramic', 'Alumina-zirconia on request'],
    applications: [
      'Ceramic glaze and body milling',
      'Mineral and pigment grinding where iron pickup is not permitted',
      'Chemical powder dispersion',
      'Wet and dry ball milling',
      'Laboratory and pilot mills',
    ],
    comparison:
      'Steel media are cheaper and tougher but contaminate the product with iron and wear faster in abrasive slurries. Alumina media cost more upfront and must be run within their impact limits, but they keep the product clean and hold their size longer in the right duty.',
    faqs: [
      {
        q: 'Can alumina balls replace steel media directly?',
        a: 'Not one-for-one. Alumina is more brittle under impact, so mill speed, ball size and feed conditions are usually adjusted. We will discuss the mill duty before quoting a charge.',
      },
      {
        q: 'What decides wear life?',
        a: 'Body density and grain structure, the abrasiveness of the slurry, and how far the mill runs from its designed operating point. Running above critical speed shortens any media life.',
      },
      {
        q: 'Do you supply grading advice?',
        a: 'Yes — tell us the mill dimensions, feed size, target fineness and slurry solids, and we will recommend a size distribution for the charge.',
      },
    ],
  },
  {
    slug: 'refractory-ball',
    name: 'Refractory Ball',
    title: 'Refractory Ceramic Ball | Heat Storage and High Temperature Media',
    h1: 'Refractory Balls & Heat Storage Media',
    metaDescription:
      'Refractory ceramic balls for heat storage beds, hot blast stoves and high temperature packed beds. Thermal shock resistance and refractoriness under load.',
    targetKeyword: 'refractory ceramic ball',
    category: 'ceramic-balls',
    intro:
      'A refractory ball bed is a heat exchanger made of spheres: it absorbs heat from a hot gas, then gives it back to the cold stream on the reverse cycle. The media must survive that reversal thousands of times without spalling, and must not soften under the load of the bed above it. This is a materials problem more than a shape problem.',
    specs: [
      { item: 'Form', value: 'Solid spheres, refractory body' },
      { item: 'Duty', value: 'Heat storage and recovery beds, hot gas distribution, refractory packing' },
      { item: 'Key selection inputs', value: 'Peak temperature, cycle frequency, thermal gradient, bed depth and load' },
      { item: 'Critical properties', value: 'Refractoriness under load, thermal shock resistance, low spalling' },
      { item: 'Related grades', value: 'High alumina for load bearing, porous for surface area duty' },
    ],
    materials: ['High alumina refractory', 'Mullite', 'Chamotte / fireclay based bodies'],
    applications: [
      'Hot blast stoves and regenerative heat exchangers',
      'RTO and thermal oxidiser heat exchange beds',
      'High temperature gas distribution layers',
      'Refractory linings and vessel protection layers',
      'Kiln and furnace packing',
    ],
    comparison:
      'Refractory media are chosen for temperature and cycling, not for mass transfer. Compared with a structured heat exchange block they are cheaper and easier to replace in sections, but they carry more pressure drop and occupy more volume for the same heat transfer.',
    faqs: [
      {
        q: 'How do I choose between refractory and high alumina balls?',
        a: 'Both are refractory bodies; the difference is where the emphasis sits. Heat storage duty stresses thermal shock resistance, while deep beds stress refractoriness under load. Send the temperature profile and cycle and we will match the body.',
      },
      {
        q: 'Can the bed be replaced in sections?',
        a: 'Yes. Beds are normally removed and reloaded in layers, and we can supply replacement media without disturbing the supporting structure if it is still sound.',
      },
      {
        q: 'Do you provide support layers for these beds?',
        a: 'Yes — graded support media and support plates are supplied together with the working bed so the load path is designed as one system.',
      },
    ],
  },
];
