// 塔内件详情页数据（5 项）
// 原则：只写工程上可确证的定性内容，不编造具体流量/塔径/价格/交期数字

export interface Internal {
  slug: string;
  image: string;
  name: string;
  title: string;
  h1: string;
  metaDescription: string;
  targetKeyword: string;
  intro: string;
  types: { name: string; desc: string }[];
  specs: { item: string; value: string }[];
  materials: string[];
  applications: string[];
  designNotes: string[];
  comparison: string;
  faqs: { q: string; a: string }[];
}

export const INTERNALS: Internal[] = [
  {
    slug: 'liquid-distributors',
    image: '/images/internals/liquid-distributors.svg',
    name: 'Liquid Distributors',
    title: 'Liquid Distributor Manufacturer | Trough, Orifice & Spray Distributors',
    h1: 'Liquid Distributors for Packed Columns',
    metaDescription:
      'Factory-direct liquid distributors for packed columns: trough, orifice pan and spray types in SS304, SS316L, PP and PVDF. Matched to your column diameter and turndown.',
    targetKeyword: 'liquid distributor',
    intro:
      'A packed column can only perform as well as its initial liquid distribution. If liquid enters the bed unevenly, part of the packing works while the rest is bypassed — and no packing, however good, recovers that loss. We build trough, orifice and spray distributors to suit your liquid rate, turndown and column size, and we match the mounting ring and manway dimensions of the vessel you already have.',
    types: [
      {
        name: 'Trough (overflow) distributor',
        desc:
          'Liquid is fed into open troughs and overflows through notches or downcomer tubes onto the bed. Handles high liquid loads and large column diameters, and stays serviceable because it can be entered and cleaned. Distribution quality depends on the troughs being set truly level.',
      },
      {
        name: 'Orifice pan / perforated pipe distributor',
        desc:
          'Liquid stands on a pan or inside a header and passes through calibrated orifices. Simple, compact and predictable, with good turndown when the orifice count is designed for it. Best suited to clean liquids, since small orifices are the first thing to plug.',
      },
      {
        name: 'Spray (nozzle) distributor',
        desc:
          'A header with nozzles sprays liquid over the bed. Lowest cost and lowest pressure-drop option, useful for low liquid rates, scrubbers and applications where the packing only needs to be kept wet. Distribution is coarser than a trough or pan and is sensitive to gas cross-flow.',
      },
    ],
    specs: [
      { item: 'Configuration', value: 'Trough / overflow, orifice pan, perforated pipe, spray header' },
      { item: 'Materials', value: 'SS304, SS316L, duplex, PP, PVDF, PTFE-lined steel, FRP' },
      { item: 'Design inputs we need', value: 'Liquid rate, turndown ratio, column ID, nozzle size and orientation, vapour rate' },
      { item: 'Mounting', value: 'Support ring or welded brackets, levelled at site; segmented for manway entry' },
      { item: 'Distribution points', value: 'Set by design practice for your turndown and bed diameter' },
      { item: 'Fabrication', value: 'Removable sections, lifting lugs, matched to existing bolt pattern where required' },
    ],
    materials: ['SS304', 'SS316L', 'Duplex stainless steel', 'PP', 'PVDF', 'PTFE-lined steel', 'FRP'],
    applications: [
      'Distillation and fractionation columns',
      'Absorption and gas scrubbing towers',
      'Strippers and wastewater desorption columns',
      'Quench and cooling towers',
      'Columns with high turndown or intermittent operation',
    ],
    designNotes: [
      'Give us the minimum and maximum liquid rate, not just the design point — turndown decides whether a pan with fewer, larger orifices or a trough arrangement is the right answer.',
      'Tell us the column internal diameter, manway size and whether the distributor must be installed through it. Anything larger than the manway has to be built in sections that bolt together inside the vessel.',
      'Liquid with suspended solids or tendency to crystallise should not go through small orifices. In that service a trough or a large-hole design with a purge connection is safer.',
      'Levelness is not a detail: a distributor set out of level will feed one side of the bed harder than the other for its whole service life. We supply levelling references and installation tolerance with the drawings.',
      'If the column already exists, send the support ring detail or a sketch. Matching the vessel is cheaper than modifying it.',
    ],
    comparison:
      'Trough distributors are the default for large columns and high liquid loads; orifice pans give more predictable distribution in smaller, clean-service columns; spray headers are the economical choice for scrubbers and low liquid rates. Where turndown is wide, a trough or a two-stage arrangement usually holds distribution better than a single orifice plate.',
    faqs: [
      {
        q: 'How do I know which distributor type suits my column?',
        a: 'The deciding inputs are liquid rate, turndown, column diameter and how clean the liquid is. Send those four and we will tell you which type is realistic — in many cases two of them work, and the choice then comes down to cost and serviceability.',
      },
      {
        q: 'Can you replace a distributor in an existing column?',
        a: 'Yes. We work from the support ring detail, nozzle arrangement and a sketch or photos of the existing internals. The replacement is built to drop into the same space, so no vessel modification is needed.',
      },
      {
        q: 'Will a spray header give the same efficiency as a trough distributor?',
        a: 'Not usually in a tightly specified distillation column. Spray distribution is coarser and affected by gas flow, so it is normally chosen for scrubbing and wetting duties where exact distribution is less critical.',
      },
      {
        q: 'What information do you need to quote?',
        a: 'Liquid rate range, column diameter, service fluid, material, nozzle size, and whether the unit is new or a replacement. A P&ID extract or column datasheet makes the quotation precise.',
      },
    ],
  },
  {
    slug: 'support-plates',
    image: '/images/internals/support-plates.svg',
    name: 'Support Plates',
    title: 'Packing Support Plate Manufacturer | Column Support Grids & Plates',
    h1: 'Support Plates & Support Grids for Packed Beds',
    metaDescription:
      'Packing support plates and support grids for random and structured packing: bar grids, perforated plates and ceramic supports sized to your bed load and open-area requirement.',
    targetKeyword: 'packing support plate',
    intro:
      'The support plate carries the entire packed bed — packing weight, liquid holdup, and in fouling service whatever deposits build up over a run. It also has to let gas and liquid through with as little pressure drop as possible, without letting packing fall through. Those two demands pull against each other, so the plate is sized from your bed load and your packing size rather than picked from a list.',
    types: [
      {
        name: 'Bar grid support',
        desc:
          'Parallel or crossed bars on a support ring. High open area, low pressure drop and good liquid drainage — the usual choice under random packing where the bed load is moderate.',
      },
      {
        name: 'Perforated / corrugated support plate',
        desc:
          'A plate with punched or slotted openings, often corrugated for stiffness. Gives a more uniform support surface and higher load capacity than a simple grid, at some cost in open area.',
      },
      {
        name: 'Gas-injection support plate',
        desc:
          'A support with dedicated gas passages, used where the gas rate is high enough that a plain grid would create a pressure-drop penalty or where two-phase flow enters at the bottom of the bed.',
      },
      {
        name: 'Ceramic support and brick courses',
        desc:
          'For ceramic packing in corrosive service, or where the bed sits on a refractory-lined vessel. Supplied as support rings, grids or a graded brick/ball layer.',
      },
    ],
    specs: [
      { item: 'Type', value: 'Bar grid, perforated plate, corrugated plate, gas-injection, ceramic' },
      { item: 'Opening size', value: 'Set smaller than the nominal packing size you are using' },
      { item: 'Materials', value: 'SS304, SS316L, carbon steel (coated), duplex, PP, PVDF, ceramic' },
      { item: 'Support ring', value: 'Welded to vessel or supplied loose with clamping detail' },
      { item: 'Segmentation', value: 'Split into manway-sized sections with bolted or hooked joints' },
      { item: 'Load basis', value: 'Sized against your bed weight, liquid holdup and fouling allowance' },
      { item: 'Access', value: 'Removable panels for bed change-out and cleaning' },
    ],
    materials: ['SS304', 'SS316L', 'Carbon steel', 'Duplex stainless steel', 'PP', 'PVDF', 'Ceramic'],
    applications: [
      'Random packing beds in distillation and absorption columns',
      'Structured packing beds with collector above',
      'Scrubbers and packed towers',
      'Ceramic packing in acid and chlorine service',
      'Columns with periodic bed washing or replacement',
    ],
    designNotes: [
      'Openings must be smaller than the smallest packing piece in the bed. If you are changing packing size, tell us — the plate may need to change with it.',
      'The load case is not just dry packing weight. Add liquid holdup in operation and a fouling allowance if the service is dirty; undersized plates deflect, and a deflected bed channels.',
      'Open area trades against strength. We size the bars and beams for your load and then check the resulting pressure drop against your process allowance.',
      'Plan for access. A support plate that cannot be removed through the manway turns a bed change-out into a vessel entry job.',
      'In corrosive service, specify the material rather than relying on coating — coated carbon steel fails at every cut edge and weld.',
    ],
    comparison:
      'A bar grid is the cheapest way to support a moderate bed with minimum pressure drop. A perforated or corrugated plate costs more but carries heavier beds and gives a flatter support surface. Gas-injection designs are used where pressure drop at the bed inlet actually matters to the process; ceramic supports are chosen for chemical compatibility, not for strength.',
    faqs: [
      {
        q: 'How large should the openings in a support plate be?',
        a: 'Small enough that the packing cannot pass through — normally no larger than the nominal size of the packing you are using. The exact figure is set from your packing spec, so send it with the enquiry.',
      },
      {
        q: 'Do you supply the support ring as well?',
        a: 'Yes, either welded into the vessel by your fabricator or supplied loose with a clamping arrangement where the vessel already has a ring.',
      },
      {
        q: 'Can a support plate be installed through a manway?',
        a: 'Yes. Plates above manway size are built in sections with bolted or hooked joints, sized so each piece passes through the opening and assembles inside the column.',
      },
      {
        q: 'What material should I use in a chlorinated or acid service?',
        a: 'Typically SS316L, duplex, PP/PVDF or ceramic depending on concentration and temperature. Tell us the medium, concentration and temperature and we will recommend a material rather than guess.',
      },
    ],
  },
  {
    slug: 'redistributors',
    image: '/images/internals/redistributors.svg',
    name: 'Redistributors',
    title: 'Liquid Redistributor Manufacturer | Collector & Chimney Tray Redistributors',
    h1: 'Liquid Redistributors for Deep Packed Beds',
    metaDescription:
      'Collector and chimney-tray liquid redistributors for tall packed beds. Re-mix liquid, correct wall flow and support multi-bed columns. Built to your column and duty.',
    targetKeyword: 'liquid redistributor',
    intro:
      'In a deep packed bed, liquid that starts out well distributed does not stay that way. It migrates toward the wall, and any small horizontal maldistribution at the top compounds with depth. Past a certain bed depth, efficiency stops improving with added packing unless the liquid is collected, mixed and spread again. That is what a redistributor does — and it is why tall columns are built as several beds rather than one.',
    types: [
      {
        name: 'Collector redistributor',
        desc:
          'Collects liquid across the full section, mixes it in a common sum, and re-distributes through orifices or troughs. The standard choice for multi-bed columns.',
      },
      {
        name: 'Chimney tray redistributor',
        desc:
          'A tray with vapour chimneys: gas rises through the chimneys while liquid is collected on the tray and re-spread. Allows a large open gas area and can double as a draw-off or feed point.',
      },
      {
        name: 'Wall wiper / peripheral baffle',
        desc:
          'A ring baffle that redirects liquid clinging to the column wall back into the bed. Cheap, simple, and often used together with a distributor rather than as a substitute for one.',
      },
    ],
    specs: [
      { item: 'Type', value: 'Collector redistributor, chimney tray, wall wiper baffle' },
      { item: 'Materials', value: 'SS304, SS316L, duplex, PP, PVDF, PTFE-lined steel' },
      { item: 'Design inputs', value: 'Column ID, liquid and vapour rates, bed depths, whether draw-off is required' },
      { item: 'Vapour path', value: 'Chimneys or open area sized for your gas rate and allowable pressure drop' },
      { item: 'Combined functions', value: 'Can include side draw-off, feed introduction or temperature measurement point' },
      { item: 'Access', value: 'Segmented construction for manway installation; removable panels for cleaning' },
    ],
    materials: ['SS304', 'SS316L', 'Duplex stainless steel', 'PP', 'PVDF', 'PTFE-lined steel'],
    applications: [
      'Tall distillation columns built as multiple beds',
      'Columns with side draws or intermediate feeds',
      'Absorbers where wall flow has caused efficiency loss',
      'Revamps where added bed depth gave no gain',
      'Columns with varying liquid load along the height',
    ],
    designNotes: [
      'If you have added packing to a column and seen no efficiency gain, maldistribution is a likely reason — a redistributor between beds is often the cheapest fix before considering new packing.',
      'The bed depth at which redistribution becomes worthwhile depends on diameter, liquid load and how well the initial distribution was done. We will discuss it against your column rather than quote a fixed rule.',
      'A redistributor costs pressure drop. If the column is close to its limits, the vapour path has to be sized carefully — this is where chimney trays earn their cost.',
      'If a side draw or intermediate feed is planned, combine it with the redistributor instead of adding a separate tray. Fewer internals means less pressure drop and more usable space.',
      'Specify whether the unit must be cleanable in place. Troughs and trays with removable panels are easier to wash than a fully welded assembly.',
    ],
    comparison:
      'A collector redistributor gives the best re-mixing and is the standard multi-bed solution. A chimney tray costs more but handles high vapour rates with less pressure drop and can carry a draw-off. Wall wipers are a low-cost partial measure: they reduce wall flow but do not re-mix the bulk of the liquid, so they do not replace a proper redistributor in a tall bed.',
    faqs: [
      {
        q: 'When does a column need a redistributor?',
        a: 'Broadly, when the bed is deep enough that maldistribution would compound before the liquid leaves the packing, and whenever a column is split into several beds. The exact depth depends on diameter and liquid load — send the column data and we will advise.',
      },
      {
        q: 'Does a redistributor reduce column capacity?',
        a: 'It occupies height and adds some pressure drop, which is why chimney designs exist for columns with little margin. The efficiency recovered from better distribution normally outweighs the loss.',
      },
      {
        q: 'Can it include a side draw-off?',
        a: 'Yes. Collector and chimney tray designs are routinely built with a draw-off sump and nozzle connection so one internal does two jobs.',
      },
      {
        q: 'Can you supply a redistributor for an existing column?',
        a: 'Yes. We need the internal diameter, support ring detail, nozzle positions and the bed arrangement. We then design to fit what is already in the vessel.',
      },
    ],
  },
  {
    slug: 'demister-supports',
    image: '/images/internals/demister-supports.svg',
    name: 'Demister Supports',
    title: 'Demister Support Grids & Hold-Down Bars | Mist Eliminator Supports',
    h1: 'Demister Supports, Grids & Hold-Down Bars',
    metaDescription:
      'Support grids and hold-down bars for wire mesh and vane mist eliminators. Prevent pad sag and gas bypass, allow drainage, and match your vessel and demister type.',
    targetKeyword: 'demister support grid',
    intro:
      'A mist eliminator only removes what passes through it. If the pad sags, lifts, or lets gas slip around its edge, droplets go straight up the wall and the separator "fails" without anything being wrong with the mesh itself. The support grid and hold-down bars are what keep the element in place, square to the flow, with a seal at the vessel wall — and they have to drain freely while doing it.',
    types: [
      {
        name: 'Support grid (upflow)',
        desc:
          'A grid or bar structure under the mesh pad, sized to carry the wet pad weight without sagging between supports. Open area is kept high so drained liquid does not pond on the grid.',
      },
      {
        name: 'Hold-down grid / bars',
        desc:
          'Fitted above the pad to stop it lifting or fluidising at high gas velocity. Usually lighter than the support grid, with the same open-area requirement.',
      },
      {
        name: 'Vane pack support frame',
        desc:
          'A frame that carries vane bundles at the correct angle and spacing, with drainage channels so separated liquid leaves the pack instead of being re-entrained.',
      },
      {
        name: 'Wall seal and bypass prevention',
        desc:
          'Ring detail, gasket or packed seal between the element edge and the vessel wall. This is the single most common cause of poor demister performance in service.',
      },
    ],
    specs: [
      { item: 'Type', value: 'Support grid, hold-down grid, vane pack frame, wall seal ring' },
      { item: 'Materials', value: 'SS304, SS316L, duplex, PP, PVDF, PTFE, FRP' },
      { item: 'Design inputs', value: 'Vessel ID, demister type and thickness, gas velocity, liquid load' },
      { item: 'Open area', value: 'High free area to avoid ponding and hold-up on the grid' },
      { item: 'Segmentation', value: 'Split for manway entry; bolted joints inside the vessel' },
      { item: 'Accessories', value: 'Lifting handles, fasteners in matching material, gaskets' },
    ],
    materials: ['SS304', 'SS316L', 'Duplex stainless steel', 'PP', 'PVDF', 'PTFE', 'FRP'],
    applications: [
      'Knock-out drums and separator vessels',
      'Absorber and scrubber tops',
      'Evaporator and crystalliser vapour outlets',
      'Compressor suction scrubbers',
      'Columns with wire mesh or vane mist eliminators',
    ],
    designNotes: [
      'Give us the gas velocity at the design case and the turndown case. Hold-down requirements come from the highest velocity the pad will see, not the average.',
      'Say which way the flow runs. Upflow needs a hold-down grid as well as a support; downflow does not.',
      'Drainage path matters as much as strength. A grid that traps liquid re-entrains it into the gas, which reads as a demister failure even though the mesh is fine.',
      'The wall seal is not optional. Specify how the element edge closes against the vessel — a few millimetres of gap is enough for a measurable bypass.',
      'If the vessel is already built, send the nozzle and support ring dimensions. Most retrofits fail on fit, not on design.',
    ],
    comparison:
      'A support grid alone is enough for low-velocity upflow duty. Add a hold-down grid wherever gas velocity could lift the pad, which is most revamps and most high-capacity scrubbers. Vane packs need a purpose-built frame with drainage rather than a grid, because their separation depends on the gas turning inside the bundle.',
    faqs: [
      {
        q: 'Do I need a hold-down grid as well as a support grid?',
        a: 'For upflow service at meaningful gas velocity, usually yes. The support grid carries the wet pad; the hold-down stops it lifting and channelling. Downflow installations normally need only support.',
      },
      {
        q: 'Why does my demister pass liquid even though the pad looks intact?',
        a: 'The usual causes are gas bypassing around the element edge, the pad sagging away from the support, or liquid re-entrainment from a grid that does not drain. All three are support and installation issues rather than mesh issues.',
      },
      {
        q: 'Can you supply the grids with the demister pad?',
        a: 'Yes. Supplying mesh, vane pack and support as one item removes the fit risk and the argument over who is responsible when performance falls short.',
      },
      {
        q: 'What material suits a chlorinated or acidic vapour?',
        a: 'SS316L for many chloride duties, PP/PVDF or PTFE where stainless is attacked, and FRP in some scrubbing services. Send the medium, concentration and temperature for a recommendation.',
      },
    ],
  },
  {
    slug: 'feed-pipes-baffles',
    image: '/images/internals/feed-pipes-baffles.svg',
    name: 'Feed Pipes & Baffles',
    title: 'Column Inlet Baffles & Feed Pipes | Impingement Protection',
    h1: 'Feed Pipes, Inlet Devices & Impingement Baffles',
    metaDescription:
      'Feed pipes, inlet distributors and impingement baffles that protect packed beds from high-velocity impingement, erosion and vibration in distillation and scrubbing columns.',
    targetKeyword: 'column inlet baffle',
    intro:
      'Feed entering a column carries momentum. Dropped straight onto a packed bed it erodes packing, breaks up liquid into fine droplets that the bed cannot handle, and can set up vibration in the internals. A feed pipe and baffle arrangement turns that jet into a spread flow before it reaches anything expensive. It is one of the cheapest internals on the column and one of the most often left out of a revamp.',
    types: [
      {
        name: 'Impingement (splash) baffle',
        desc:
          'A plate set in front of a side inlet so the incoming jet hits it and spreads, instead of blasting directly into the bed or the vessel wall.',
      },
      {
        name: 'Feed pipe with distribution holes',
        desc:
          'A pipe inside the column with drilled openings that releases feed along its length, spreading it across the section rather than at one point.',
      },
      {
        name: 'Tangential inlet with baffle',
        desc:
          'Used where the feed has to be degassed or partly separated on entry. The baffle controls the swirl and protects the internals downstream.',
      },
      {
        name: 'Reflux / return and reboiler-return baffles',
        desc:
          'Protect the top bed from a high-velocity reflux return and the bottom of the column from vapour or two-phase reboiler return impingement.',
      },
    ],
    specs: [
      { item: 'Type', value: 'Impingement baffle, perforated feed pipe, tangential inlet, return baffle' },
      { item: 'Materials', value: 'SS304, SS316L, duplex, carbon steel, PP, PVDF, PTFE-lined' },
      { item: 'Design inputs', value: 'Nozzle size, feed rate and phase, column ID, distance to bed' },
      { item: 'Orientation', value: 'Matched to existing nozzle; horizontal, vertical or tangential entry' },
      { item: 'Fixing', value: 'Welded brackets, bolted removable, or clamped to existing internals' },
      { item: 'Wear allowance', value: 'Thicker section at the impingement point where the feed is abrasive or two-phase' },
    ],
    materials: ['SS304', 'SS316L', 'Duplex stainless steel', 'Carbon steel', 'PP', 'PVDF', 'PTFE-lined steel'],
    applications: [
      'Side feed nozzles on distillation columns',
      'Reflux returns above the top bed',
      'Reboiler returns and vapour inlets',
      'Scrubber and quench inlets',
      'Revamps where a new feed point has been added',
    ],
    designNotes: [
      'Tell us the distance from the nozzle to the top of the bed. That distance decides whether a simple baffle is enough or whether a distributing pipe is needed.',
      'Two-phase or flashing feed is the hard case — the jet expands as it enters, so the baffle has to be sized for the flashed velocity, not the line velocity.',
      'Abrasive slurries and catalyst fines wear through a thin baffle quickly. Specify the service and we will increase section at the impingement zone.',
      'Baffles are often omitted on revamps where a nozzle is reused for a higher rate. If the duty has changed, check the inlet device with it.',
      'Keep the baffle removable if the column needs cleaning between runs; a welded-in plate is a permanent obstruction.',
    ],
    comparison:
      'A plain impingement baffle is the cheapest protection and is adequate when the nozzle is well clear of the bed. A perforated feed pipe costs more but spreads liquid across the section, which is worth it when the feed rate is high or the bed is close. Tangential entries are chosen for phase separation reasons rather than distribution, and need a baffle to control the swirl they create.',
    faqs: [
      {
        q: 'When is a feed baffle really necessary?',
        a: 'Whenever the inlet velocity is high enough to disturb the bed, when the nozzle is close to the packing, or when the feed is two-phase or flashing. Retrofits at higher rates are the classic case where the original device is no longer adequate.',
      },
      {
        q: 'How far below the nozzle should the baffle sit?',
        a: 'It depends on nozzle size and feed velocity — the aim is to let the jet spread before it reaches the bed. Send the nozzle size, feed rate and distance to the bed and we will size it.',
      },
      {
        q: 'Can you make a baffle to fit an existing nozzle?',
        a: 'Yes, that is most of what we do here. A nozzle detail drawing or measured dimensions are enough to fabricate a bolt-on or clamped baffle without vessel modification.',
      },
      {
        q: 'Does the baffle affect column performance?',
        a: 'It should not, if it is sized correctly. Its purpose is to stop the inlet from damaging distribution. An oversized or badly placed baffle can create its own maldistribution, which is why we design to the actual duty.',
      },
    ],
  },
];

export const getInternal = (slug: string) => INTERNALS.find((i) => i.slug === slug);
