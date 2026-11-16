// 产品页数据（12 个首批产品）
// 每项：slug、title、目标词、规格、材质、应用、对比品

export interface Product {
  slug: string;
  name: string;
  title: string;
  h1: string;
  metaDescription: string;
  targetKeyword: string;
  category: string;
  image?: string;
  intro: string;
  specs: { item: string; value: string }[];
  materials: string[];
  applications: string[];
  comparison: string;
  faqs: { q: string; a: string }[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'pall-ring-metal',
    name: 'Metal Pall Ring',
    image: '/images/products/pall-ring-metal.webp',
    title: 'Metal Pall Ring Manufacturer | SS316L Pall Ring Supplier',
    h1: 'Metal Pall Ring (SS304 / SS316L)',
    metaDescription:
      'Factory-direct metal pall ring in SS304, SS316 and SS316L. Low pressure drop and high capacity for distillation and absorption. ISO 9001-certified production.',
    targetKeyword: 'metal pall ring',
    category: 'random-packing',
    intro:
      'The metal pall ring is the most widely used random packing for high-throughput distillation and absorption columns. Its internal ribs and open-wall design increase surface utilisation while keeping pressure drop low, delivering capacity roughly 40% higher than a classic Raschig ring of the same nominal size.',
    specs: [
      { item: 'Nominal size', value: '16 mm / 25 mm / 38 mm / 50 mm / 76 mm' },
      { item: 'Material', value: 'SS304, SS316, SS316L, carbon steel, copper' },
      { item: 'Specific surface area', value: '90–420 m²/m³ (size dependent)' },
      { item: 'Void fraction', value: '92–96%' },
      { item: 'Bulk density', value: 'SS304: 170–620 kg/m³ (size dependent)' },
      { item: 'Packing factor', value: '48–165 m⁻¹' },
      { item: 'Wall thickness', value: '0.3–0.8 mm' },
    ],
    materials: ['SS304', 'SS316', 'SS316L', 'Carbon steel', 'Copper'],
    applications: [
      'Distillation columns',
      'CO₂ and H₂S absorption',
      'Solvent recovery',
      'Vacuum distillation',
    ],
    comparison:
      'Compared with a Raschig ring, the metal pall ring offers higher capacity and better liquid distribution at a small increase in cost. Compared with IMTP-type saddles, it is slightly lower in efficiency at high liquid loads but more economical for general service.',
    faqs: [
      {
        q: 'What is the difference between SS304 and SS316L pall rings?',
        a: 'SS316L contains molybdenum, giving far better resistance to chlorides and acid gas. For seawater or sour service, choose SS316L; for general clean hydrocarbons, SS304 is usually sufficient.',
      },
      {
        q: 'What is the bulk density of a 25 mm metal pall ring?',
        a: 'A 25 mm SS304 pall ring typically packs at around 400–520 kg/m³ depending on wall thickness. We confirm the exact figure against your operating conditions before quoting.',
      },
      {
        q: 'Can metal pall rings be used in vacuum service?',
        a: 'Yes. The open-wall geometry gives very low pressure drop, which is why metal pall rings are a standard choice for vacuum distillation columns.',
      },
      {
        q: 'Do you offer custom wall thickness?',
        a: 'Yes, wall thickness and nominal size can be matched to your process requirements and structural load.',
      },
      {
        q: 'What is the typical lead time?',
        a: 'Lead time depends on quantity and material. We confirm the delivery schedule in writing before you place an order.',
      },
    ],
  },
  {
    slug: 'pall-ring-plastic',
    name: 'Plastic Pall Ring',
    image: '/images/products/pall-ring-plastic.webp',
    title: 'Plastic Pall Ring PP / PVDF / PTFE | Manufacturer & Supplier',
    h1: 'Plastic Pall Ring (PP / PVDF / PTFE)',
    metaDescription:
      'Plastic pall ring in PP, PVDF and PTFE for corrosive and low-temperature scrubbing. Lightweight, chemical-resistant and cost-effective. Factory-direct supply.',
    targetKeyword: 'plastic pall ring',
    category: 'random-packing',
    intro:
      'Plastic pall rings deliver the same open-wall performance as metal rings at a fraction of the weight and cost, and with far better corrosion resistance. They are the default choice for wet scrubbers, acid-gas absorption and low-temperature service where metals would corrode.',
    specs: [
      { item: 'Nominal size', value: '16 mm / 25 mm / 38 mm / 50 mm / 76 mm / 90 mm' },
      { item: 'Material', value: 'PP, PE, PVC, PVDF, PTFE' },
      { item: 'Specific surface area', value: '90–340 m²/m³' },
      { item: 'Void fraction', value: '88–94%' },
      { item: 'Bulk density', value: 'PP: 55–120 kg/m³' },
      { item: 'Max service temperature', value: 'PP: 100°C · PVDF: 150°C · PTFE: 260°C' },
      { item: 'Packing factor', value: '52–170 m⁻¹' },
    ],
    materials: ['PP', 'PE', 'PVC', 'PVDF', 'PTFE'],
    applications: [
      'Acid-gas scrubbing',
      'Chlorine and HCl absorption',
      'Water treatment towers',
      'Fume scrubbing',
    ],
    comparison:
      'Plastic pall rings are the lightest and most corrosion-resistant option. For strong oxidising acids or temperatures above 150°C, step up to PVDF or PTFE. PTFE pall rings suit the most aggressive media including hot concentrated acids.',
    faqs: [
      {
        q: 'Which plastic should I choose for chlorine gas scrubbing?',
        a: 'PVDF or PTFE. PP works for mild duty, but chlorine and its hydrolysis products will attack PP over time. For hot wet chlorine, PTFE is the safest choice.',
      },
      {
        q: 'What is the maximum temperature for a PP pall ring?',
        a: 'Around 100°C continuous. Above that, mechanical strength falls quickly; switch to PVDF (to 150°C) or PTFE (to 260°C).',
      },
      {
        q: 'Are PTFE pall rings worth the extra cost?',
        a: 'Only for the most aggressive media — hot concentrated acids, strong oxidisers, or high-purity processes. For general acid scrubbers, PP or PVDF is usually the better value.',
      },
      {
        q: 'Do plastic pall rings float?',
        a: 'In water they can float until wetted. In practice the packed bed is held down and the rings wet out quickly under liquid load.',
      },
      {
        q: 'Can you supply food-grade or high-purity grades?',
        a: 'Yes, we can supply virgin, low-leachable grades for food, pharmaceutical and high-purity applications.',
      },
    ],
  },
  {
    slug: 'pall-ring-ceramic',
    name: 'Ceramic Pall Ring',
    image: '/images/products/pall-ring-ceramic.webp',
    title: 'Ceramic Pall Ring Manufacturer | Chemical-Resistant Packing',
    h1: 'Ceramic Pall Ring',
    metaDescription:
      'Ceramic pall ring for high-temperature and strongly corrosive service. Superior thermal stability and acid resistance. Factory-direct supply from China.',
    targetKeyword: 'ceramic pall ring',
    category: 'random-packing',
    intro:
      'Ceramic pall rings combine the open geometry of a pall ring with the unmatched heat and chemical resistance of ceramic. They are specified where temperature and corrosion rule out both metal and plastic — typically in acid manufacture, hot-gas scrubbing and regeneration columns.',
    specs: [
      { item: 'Nominal size', value: '25 mm / 38 mm / 50 mm / 76 mm' },
      { item: 'Material', value: 'Chemical porcelain, alumina ceramic' },
      { item: 'Specific surface area', value: '90–250 m²/m³' },
      { item: 'Void fraction', value: '68–78%' },
      { item: 'Bulk density', value: '560–720 kg/m³' },
      { item: 'Max service temperature', value: '> 1000°C (porcelain)' },
      { item: 'Acid resistance', value: '≥ 99.5% (weight loss test)' },
    ],
    materials: ['Chemical porcelain', 'Alumina ceramic'],
    applications: [
      'Sulphuric acid plants',
      'Hot-gas scrubbing',
      'Drying and absorption towers',
      'Regeneration columns',
    ],
    comparison:
      'Ceramic pall rings trade lower capacity (higher bulk density, lower void fraction) for unmatched corrosion and temperature resistance. Use them only where metal and plastic cannot survive; elsewhere metal or plastic gives better throughput.',
    faqs: [
      {
        q: 'What temperature can a ceramic pall ring withstand?',
        a: 'Chemical porcelain typically withstands over 1000°C, far beyond any packed-column service temperature.',
      },
      {
        q: 'Are ceramic pall rings brittle?',
        a: 'They are more brittle than metal or plastic and must be installed with care. Our packing is fired to give good crush strength, and we can advise on loading procedures.',
      },
      {
        q: 'What is the acid resistance of your ceramic?',
        a: 'Weight loss in standard acid testing is typically below 0.5%, i.e. acid resistance ≥ 99.5%.',
      },
      {
        q: 'When should I choose ceramic over plastic?',
        a: 'When temperatures exceed the plastic limit, or when the medium attacks all available plastics.',
      },
      {
        q: 'Can ceramic rings be used in fluoride-containing media?',
        a: 'No — HF attacks silica-based ceramic. For HF service we recommend carbon or PTFE packing instead.',
      },
    ],
  },
  {
    slug: 'raschig-ring',
    name: 'Raschig Ring',
    image: '/images/products/raschig-ring-metal.webp',
    title: 'Raschig Ring Manufacturer | Metal, Plastic & Ceramic',
    h1: 'Raschig Ring',
    metaDescription:
      'Raschig ring in metal, plastic and ceramic. The classic random packing for simple, robust columns. Factory-direct supply, ISO 9001-certified production.',
    targetKeyword: 'raschig ring',
    category: 'random-packing',
    intro:
      'The Raschig ring is the original random packing — a simple hollow cylinder whose height equals its diameter. Though it has lower capacity than modern geometries, it remains popular for its low cost, robustness and tolerance of dirty or fouling service.',
    specs: [
      { item: 'Nominal size', value: '16 mm to 100 mm' },
      { item: 'Material', value: 'SS304, SS316, carbon steel, PP, PVDF, ceramic, carbon' },
      { item: 'Specific surface area', value: '60–340 m²/m³' },
      { item: 'Void fraction', value: '70–92%' },
      { item: 'Bulk density', value: 'Material dependent' },
      { item: 'Geometry', value: 'H = D (equal height and diameter)' },
    ],
    materials: ['SS304', 'SS316', 'Carbon steel', 'PP', 'PVDF', 'Ceramic', 'Carbon'],
    applications: [
      'Simple absorption columns',
      'Laboratory and pilot columns',
      'Fouling or dirty service',
      'Cooling and condensation',
    ],
    comparison:
      'The Raschig ring is the cheapest and simplest packing but has the lowest capacity of the common geometries. For new columns, a pall ring or saddle usually pays back through smaller diameter or lower energy cost; Raschig rings still win for very simple or fouling service.',
    faqs: [
      {
        q: 'Why would I choose a Raschig ring today?',
        a: 'Low cost, robustness and resistance to fouling. For very simple duties or dirty streams the marginal capacity of a modern ring is wasted, so a Raschig ring is the economical choice.',
      },
      {
        q: 'What is the difference between Raschig and pall rings?',
        a: 'A pall ring adds internal ribs and openings to the Raschig cylinder, raising capacity by about 40% at similar cost.',
      },
      {
        q: 'Can you supply large-diameter Raschig rings?',
        a: 'Yes, up to 100 mm nominal size in metal and ceramic.',
      },
      {
        q: 'Are carbon Raschig rings available?',
        a: 'Yes, carbon Raschig rings resist HF and strong oxidising media that attack ceramic and metal.',
      },
      {
        q: 'What wall thickness do you recommend?',
        a: 'It depends on column diameter and load. We recommend the thickness based on your mechanical design.',
      },
    ],
  },
  {
    slug: 'cascade-mini-ring',
    name: 'Cascade Mini Ring (CMR)',
    image: '/images/products/cascade-mini-ring-metal.webp',
    title: 'Cascade Mini Ring (CMR) | High-Efficiency Random Packing',
    h1: 'Cascade Mini Ring (CMR)',
    metaDescription:
      'Cascade Mini Ring (CMR) random packing for high-efficiency distillation and absorption. Lower height per theoretical stage. Factory-direct supply.',
    targetKeyword: 'cascade mini ring',
    category: 'random-packing',
    intro:
      'The Cascade Mini Ring (CMR) reduces the height-to-diameter ratio of the classic Raschig ring and adds a folded edge, improving wetting and reducing pressure drop. It delivers efficiency approaching structured packing in a low-cost random-packing form.',
    specs: [
      { item: 'Nominal size', value: '16 mm / 25 mm / 38 mm / 50 mm / 70 mm' },
      { item: 'Material', value: 'SS304, SS316, SS316L, PP, PVDF, ceramic' },
      { item: 'Specific surface area', value: '110–250 m²/m³' },
      { item: 'Void fraction', value: '85–95%' },
      { item: 'Bulk density', value: 'Material and size dependent' },
      { item: 'Packing factor', value: 'Lower than equivalent pall ring' },
    ],
    materials: ['SS304', 'SS316', 'SS316L', 'PP', 'PVDF', 'Ceramic'],
    applications: [
      'High-efficiency distillation',
      'Vacuum distillation',
      'CO₂ absorption',
      'Fine chemical separation',
    ],
    comparison:
      'The CMR offers higher efficiency than a pall ring of the same size, with a lower HETP (height equivalent to a theoretical plate). It costs more per cubic metre but often allows a shorter, cheaper column overall.',
    faqs: [
      {
        q: 'What does CMR stand for?',
        a: 'Cascade Mini Ring. It is a modified Raschig-type ring with a reduced aspect ratio and folded edge.',
      },
      {
        q: 'How does CMR compare with structured packing?',
        a: 'CMR approaches structured-packing efficiency at a fraction of the cost, making it attractive for revamps and medium-duty separations.',
      },
      {
        q: 'Can CMR be used in vacuum service?',
        a: 'Yes, its low pressure drop suits vacuum distillation well.',
      },
      {
        q: 'What materials are available?',
        a: 'Metal (SS304/316/316L), PP, PVDF and ceramic.',
      },
      {
        q: 'Does the smaller aspect ratio affect mechanical strength?',
        a: 'The folded edge and optimised geometry maintain good crush strength. We confirm load limits for your column design.',
      },
    ],
  },
  {
    slug: 'imtp-equivalent',
    name: 'IMTP Equivalent Packing',
    image: '/images/products/imtp-equivalent.webp',
    title: 'IMTP Equivalent Packing | Saddle-Type Random Packing',
    h1: 'IMTP Equivalent (Saddle-Type Packing)',
    metaDescription:
      'IMTP-equivalent saddle packing for high-capacity distillation and absorption. Open, non-nesting geometry. Factory-direct supply from China.',
    targetKeyword: 'imtp packing equivalent',
    category: 'random-packing',
    intro:
      'Our saddle-type packing is equivalent to IMTP™-type metal saddles. The open, non-nesting shape resists settling and fouling while delivering high capacity and good liquid distribution. It is a workhorse for large distillation and absorption columns.',
    specs: [
      { item: 'Nominal size', value: '25 mm / 40 mm / 50 mm / 70 mm' },
      { item: 'Material', value: 'SS304, SS316, SS316L' },
      { item: 'Specific surface area', value: '95–190 m²/m³' },
      { item: 'Void fraction', value: '96–98%' },
      { item: 'Bulk density', value: 'SS304: 140–300 kg/m³' },
      { item: 'Geometry', value: 'Open saddle, non-nesting' },
    ],
    materials: ['SS304', 'SS316', 'SS316L'],
    applications: [
      'Crude and vacuum distillation',
      'Gas absorption',
      'Stripping columns',
      'Heat recovery',
    ],
    comparison:
      'IMTP-type saddles offer higher capacity than pall rings and better liquid distribution than earlier Intalox saddles, with a low tendency to nest. They are the preferred metal random packing for high liquid loads.',
    faqs: [
      {
        q: 'What is IMTP packing?',
        a: 'IMTP (Intalox Metal Tower Packing) is a saddle-type metal packing. Our product is an equivalent, non-nesting open-saddle design with comparable hydraulic performance.',
      },
      {
        q: 'How does it compare with metal pall rings?',
        a: 'Saddle-type packing generally gives higher capacity and slightly better efficiency at high liquid loads, at a modest cost premium.',
      },
      {
        q: 'Does the open shape resist fouling?',
        a: 'Yes, the open non-nesting geometry resists solids accumulation better than closed rings.',
      },
      {
        q: 'What sizes do you offer?',
        a: '25 mm to 70 mm nominal size in stainless steel.',
      },
      {
        q: 'Can I get performance data for column sizing?',
        a: 'Yes, we supply packing factor and pressure-drop data to support your hydraulic design.',
      },
    ],
  },
  {
    slug: 'tri-pack',
    name: 'Tri-Pack',
    image: '/images/products/tri-pack.webp',
    title: 'Tri-Pack Random Packing | Plastic Tower Packing',
    h1: 'Tri-Pack (Spherical Random Packing)',
    metaDescription:
      'Tri-Pack spherical random packing for scrubbers and strippers. High surface area, low pressure drop, excellent liquid distribution. Factory-direct.',
    targetKeyword: 'tri-pack',
    category: 'random-packing',
    intro:
      'Tri-Pack is a spherical random packing with a high void fraction and a large number of liquid drip points. Its geometry resists nesting and channeling, making it a reliable choice for scrubbers, strippers and biological towers.',
    specs: [
      { item: 'Nominal size', value: '25 mm / 50 mm / 89 mm (1" / 2" / 3.5")' },
      { item: 'Material', value: 'PP, PVDF, PVC, PTFE' },
      { item: 'Specific surface area', value: '85–157 m²/m³' },
      { item: 'Void fraction', value: '90–96%' },
      { item: 'Bulk density', value: 'PP: 64–96 kg/m³' },
      { item: 'Max service temperature', value: 'PP: 100°C · PVDF: 150°C' },
    ],
    materials: ['PP', 'PVDF', 'PVC', 'PTFE'],
    applications: [
      'Wet scrubbers',
      'Air stripping towers',
      'Biological filters',
      'De-gasification',
    ],
    comparison:
      'Tri-Pack offers more surface area and drip points per unit volume than a plastic pall ring, improving mass transfer in gas-liquid service. It is slightly more expensive but often allows a shorter bed.',
    faqs: [
      {
        q: 'What makes Tri-Pack different from pall rings?',
        a: 'The spherical shape with many drip points resists nesting and gives more uniform liquid distribution, especially at low liquid rates.',
      },
      {
        q: 'Is Tri-Pack suitable for biological towers?',
        a: 'Yes, the high void fraction and large surface area make it a common choice for biological and air-stripping towers.',
      },
      {
        q: 'What sizes are available?',
        a: '1", 2" and 3.5" nominal, with other sizes available on request.',
      },
      {
        q: 'Which material resists chlorine best?',
        a: 'PVDF or PTFE. PP is suitable only for mild duty.',
      },
      {
        q: 'Can Tri-Pack be used in seawater scrubbers?',
        a: 'Yes, PP and PVDF are both suitable for marine scrubber service.',
      },
    ],
  },
  {
    slug: 'wire-mesh',
    name: 'Wire Mesh Structured Packing',
    image: '/images/products/wire-mesh.webp',
    title: 'Wire Mesh Structured Packing | High-Efficiency Column Packing',
    h1: 'Wire Mesh Structured Packing',
    metaDescription:
      'Wire mesh structured packing for high-efficiency distillation and absorption. Low HETP, low pressure drop. Factory-direct supply.',
    targetKeyword: 'wire mesh structured packing',
    category: 'structured-packing',
    intro:
      'Wire mesh structured packing delivers the highest efficiency of any packing type, with a very low HETP and extremely low pressure drop. It is the standard for high-purity distillation, fine chemical and vacuum applications where separation quality is paramount.',
    specs: [
      { item: 'Surface area', value: '250 / 350 / 500 / 700 m²/m³' },
      { item: 'Material', value: 'SS304, SS316, SS316L, duplex' },
      { item: 'Void fraction', value: '94–98%' },
      { item: 'HETP', value: '150–300 mm (application dependent)' },
      { item: 'Pressure drop', value: 'Very low' },
      { item: 'Crimp angle', value: '45° (X or Y arrangement)' },
    ],
    materials: ['SS304', 'SS316', 'SS316L', 'Duplex stainless'],
    applications: [
      'High-purity distillation',
      'Vacuum distillation',
      'Fine chemical separation',
      'Isotope separation',
    ],
    comparison:
      'Wire mesh packing is more efficient but more expensive and more sensitive to fouling than sheet-metal structured packing. Use wire mesh for clean, high-value separations; use corrugated sheet for cost-sensitive or fouling service.',
    faqs: [
      {
        q: 'What is the HETP of wire mesh structured packing?',
        a: 'Typically 150–300 mm depending on surface area and system. We provide HETP estimates for your specific mixture.',
      },
      {
        q: 'Is wire mesh packing suitable for fouling service?',
        a: 'No. The fine mesh plugs easily. For fouling or solids-laden streams choose corrugated sheet packing or random packing.',
      },
      {
        q: 'What surface area should I choose?',
        a: 'Higher surface area gives more efficiency but lower capacity. We help you balance the two against your duty.',
      },
      {
        q: 'Can you supply duplex stainless?',
        a: 'Yes, for chloride-containing systems duplex grades are available.',
      },
      {
        q: 'How is it installed?',
        a: 'As cylindrical elements stacked in layers, with each layer rotated for optimal liquid distribution.',
      },
    ],
  },
  {
    slug: 'corrugated-sheet',
    name: 'Corrugated Sheet Metal Packing',
    image: '/images/products/corrugated-sheet.webp',
    title: 'Corrugated Sheet Structured Packing | Equivalent to Mellapak™',
    h1: 'Corrugated Sheet Metal Packing (equivalent to Mellapak™)',
    metaDescription:
      'Corrugated sheet metal structured packing equivalent to Mellapak. High capacity, low pressure drop for absorption and distillation. Factory-direct.',
    targetKeyword: 'structured packing supplier',
    category: 'structured-packing',
    intro:
      'Corrugated sheet metal structured packing is the industrial standard for high-capacity absorption, distillation and scrubbing. It is equivalent to Mellapak™-type packing, offering an excellent balance of capacity, efficiency and cost, and tolerating moderate fouling far better than wire mesh.',
    specs: [
      { item: 'Surface area', value: '125 / 250 / 350 / 500 / 750 m²/m³' },
      { item: 'Material', value: 'SS304, SS316, SS316L, duplex, aluminium' },
      { item: 'Void fraction', value: '95–97%' },
      { item: 'HETP', value: '250–500 mm (application dependent)' },
      { item: 'Crimp angle', value: '45° (X/Y), 60° (high capacity)' },
      { item: 'Surface', value: 'Smooth or textured (perforated + embossed)' },
    ],
    materials: ['SS304', 'SS316', 'SS316L', 'Duplex', 'Aluminium'],
    applications: [
      'CO₂ capture',
      'Acid-gas absorption',
      'Air separation',
      'Distillation',
    ],
    comparison:
      'Corrugated sheet packing offers lower efficiency than wire mesh but higher capacity and better fouling tolerance at lower cost. It is the default structured packing for most industrial duties.',
    faqs: [
      {
        q: 'What is the difference between X and Y arrangements?',
        a: 'The Y arrangement (45°) gives lower pressure drop and higher capacity; the X arrangement gives higher efficiency. We help you choose per duty.',
      },
      {
        q: 'Is this equivalent to Mellapak?',
        a: 'Yes, our corrugated sheet packing is geometrically equivalent to Mellapak™-type packing with comparable hydraulic performance.',
      },
      {
        q: 'What surface area for CO₂ capture?',
        a: '250 or 350 m²/m³ is common for amine-based CO₂ capture, depending on solvent and gas rate.',
      },
      {
        q: 'Do you supply textured surface?',
        a: 'Yes, perforated and embossed surfaces improve wetting and mass transfer.',
      },
      {
        q: 'Can it be used in cryogenic service?',
        a: 'Yes, aluminium corrugated packing is standard in air separation and cryogenic distillation.',
      },
    ],
  },
  {
    slug: 'plastic-structured',
    name: 'Plastic Structured Packing',
    image: '/images/products/plastic-structured.webp',
    title: 'Plastic Structured Packing | Corrugated Sheet for Scrubbers',
    h1: 'Plastic Structured Packing',
    metaDescription:
      'Plastic structured packing in PP and PVDF for corrosive scrubber and absorption service. Lightweight, chemical-resistant, high capacity.',
    targetKeyword: 'plastic structured packing',
    category: 'structured-packing',
    intro:
      'Plastic structured packing brings the capacity and low pressure drop of structured geometry to corrosive service where metal fails. Made from PP or PVDF, it is lightweight, easy to install and ideal for acid scrubbers, odour control and water treatment.',
    specs: [
      { item: 'Surface area', value: '125 / 250 / 350 m²/m³' },
      { item: 'Material', value: 'PP, PVDF' },
      { item: 'Void fraction', value: '92–96%' },
      { item: 'Max service temperature', value: 'PP: 100°C · PVDF: 150°C' },
      { item: 'Crimp angle', value: '45° or 60°' },
      { item: 'Density', value: 'PP: ~0.91 g/cm³ · PVDF: ~1.78 g/cm³' },
    ],
    materials: ['PP', 'PVDF'],
    applications: [
      'Acid scrubbers',
      'Odour control',
      'Water treatment',
      'Chlorine absorption',
    ],
    comparison:
      'Plastic structured packing offers the same low pressure drop as metal structured packing at lower weight and cost, with superior corrosion resistance, at the price of a lower temperature ceiling.',
    faqs: [
      {
        q: 'Which plastic for acid scrubbers?',
        a: 'PP for mild acids at moderate temperature; PVDF for stronger acids or higher temperature.',
      },
      {
        q: 'Is plastic structured packing lighter than metal?',
        a: 'Yes, roughly a fifth of the weight, simplifying installation and structural design.',
      },
      {
        q: 'What temperature limits apply?',
        a: 'PP to about 100°C, PVDF to about 150°C continuous.',
      },
      {
        q: 'Can it handle chlorine?',
        a: 'PVDF is recommended for chlorine service; PP degrades under chlorine attack.',
      },
      {
        q: 'Do you supply custom surface areas?',
        a: 'Yes, we can match surface area and crimp angle to your scrubber design.',
      },
    ],
  },
  {
    slug: 'wire-mesh-pad',
    name: 'Wire Mesh Demister Pad',
    image: '/images/products/wire-mesh-pad.webp',
    title: 'Wire Mesh Demister Pad Manufacturer | Mist Eliminator',
    h1: 'Wire Mesh Demister Pad',
    metaDescription:
      'Wire mesh demister pad / mist eliminator for separating entrained liquid droplets from gas streams. Factory-direct supply.',
    targetKeyword: 'wire mesh demister pad',
    category: 'mist-eliminator',
    intro:
      'Wire mesh demister pads remove entrained liquid droplets from gas streams with high efficiency and very low pressure drop. They are the standard first choice for mist elimination in evaporators, scrubbers, absorbers and process vessels.',
    specs: [
      { item: 'Construction', value: 'Knitted wire mesh, layered' },
      { item: 'Material', value: 'SS304, SS316, SS316L, duplex, PP, PTFE' },
      { item: 'Removal efficiency', value: '> 99% for droplets ≥ 3–5 µm' },
      { item: 'Pressure drop', value: 'Typically 25–250 Pa' },
      { item: 'Mesh density', value: 'Standard / high efficiency styles' },
      { item: 'Support', value: 'Grid and hold-down options available' },
    ],
    materials: ['SS304', 'SS316', 'SS316L', 'Duplex', 'PP', 'PTFE'],
    applications: [
      'Evaporators',
      'Scrubbers',
      'Knock-out drums',
      'Compressor suction',
    ],
    comparison:
      'Wire mesh pads are cheaper and lower-pressure-drop than vane mist eliminators, but handle lower gas velocities and are less suited to high liquid load or fouling. Vane type suits high gas flows and dirty streams.',
    faqs: [
      {
        q: 'What droplet size can a wire mesh pad remove?',
        a: 'Typically over 99% of droplets larger than 3–5 µm, depending on mesh density and gas velocity.',
      },
      {
        q: 'How do I choose mesh density?',
        a: 'Higher density improves efficiency for fine droplets but increases pressure drop. We size it against your flow rate and duty.',
      },
      {
        q: 'Can it handle fouling?',
        a: 'Mesh pads can plug in fouling service. For heavy fouling choose a vane mist eliminator.',
      },
      {
        q: 'Do you supply support grids?',
        a: 'Yes, support grids and hold-down bars matched to your vessel.',
      },
      {
        q: 'What is the typical pressure drop?',
        a: 'Usually 25–250 Pa, far lower than most alternative separators.',
      },
    ],
  },
  {
    slug: 'vane-type',
    name: 'Vane Mist Eliminator',
    title: 'Vane Mist Eliminator | Chevron Separator Manufacturer',
    h1: 'Vane (Chevron) Mist Eliminator',
    metaDescription:
      'Vane-type chevron mist eliminator for high gas velocity and high liquid load. Handles fouling. Factory-direct supply.',
    targetKeyword: 'vane mist eliminator',
    category: 'mist-eliminator',
    intro:
      'Vane-type mist eliminators (chevron separators) use a series of closely spaced profiled blades to force the gas stream through sharp direction changes, throwing liquid droplets onto the blades. They handle far higher gas velocities and liquid loads than wire mesh, and tolerate fouling and solids.',
    specs: [
      { item: 'Blade profile', value: 'Chevron / hook type' },
      { item: 'Material', value: 'SS304, SS316, SS316L, duplex, PP, PVC' },
      { item: 'Blade spacing', value: '10–30 mm (duty dependent)' },
      { item: 'Removal efficiency', value: '> 99% for droplets ≥ 10–20 µm' },
      { item: 'Pressure drop', value: 'Higher than mesh, duty dependent' },
      { item: 'Orientation', value: 'Horizontal or vertical flow' },
    ],
    materials: ['SS304', 'SS316', 'SS316L', 'Duplex', 'PP', 'PVC'],
    applications: [
      'FGD scrubbers',
      'Cooling towers',
      'Gas dehydration',
      'High-liquid-load separators',
    ],
    comparison:
      'Vane mist eliminators handle higher gas velocities, higher liquid loads and fouling far better than wire mesh, at the cost of higher pressure drop and lower efficiency for sub-10 µm droplets.',
    faqs: [
      {
        q: 'When should I choose a vane over wire mesh?',
        a: 'When gas velocity is high, liquid load is heavy, or the stream carries solids or fouling.',
      },
      {
        q: 'What is the minimum removable droplet size?',
        a: 'Vane separators are typically effective for droplets above 10–20 µm; for finer droplets add a mesh polishing stage.',
      },
      {
        q: 'Can vanes be washed in place?',
        a: 'Yes, many vane designs allow in-situ washing, which is a key advantage in fouling service.',
      },
      {
        q: 'Do you supply vertical-flow vanes?',
        a: 'Yes, both horizontal and vertical flow configurations are available.',
      },
      {
        q: 'What blade materials resist chlorides?',
        a: 'SS316L or duplex for chlorides; PP or PVC for highly corrosive non-metallic duty.',
      },
    ],
  },
  {
    slug: 'blade-type',
    name: 'Blade Mist Eliminator',
    title: 'Blade Mist Eliminator | High-Performance Separator',
    h1: 'Blade Mist Eliminator',
    metaDescription:
      'Blade-type mist eliminator for fine droplet separation in high-performance applications. Factory-direct supply.',
    targetKeyword: 'blade mist eliminator',
    category: 'mist-eliminator',
    intro:
      'Blade-type mist eliminators use profiled plates with drainage hooks to capture fine droplets with improved efficiency over simple chevron vanes. They suit high-performance separation where both fine droplet removal and high capacity are required.',
    specs: [
      { item: 'Blade profile', value: 'Hooked / double-pocket' },
      { item: 'Material', value: 'SS304, SS316, SS316L, duplex' },
      { item: 'Removal efficiency', value: 'Fine droplets, duty dependent' },
      { item: 'Pressure drop', value: 'Moderate' },
      { item: 'Drainage', value: 'Integral hooks / pockets' },
      { item: 'Configuration', value: 'Horizontal or vertical flow' },
    ],
    materials: ['SS304', 'SS316', 'SS316L', 'Duplex'],
    applications: [
      'High-performance scrubbers',
      'Gas processing',
      'Amine units',
      'Compressor protection',
    ],
    comparison:
      'Blade-type separators improve on plain chevron vanes by adding drainage features that capture finer droplets and reduce re-entrainment, at modestly higher cost and pressure drop.',
    faqs: [
      {
        q: 'How do blade and vane mist eliminators differ?',
        a: 'Blade type adds drainage hooks or pockets that improve fine-droplet capture and reduce re-entrainment compared with plain chevron vanes.',
      },
      {
        q: 'Is a blade separator better than mesh?',
        a: 'For high velocity or fouling service, yes. For clean low-velocity streams, mesh may be more economical.',
      },
      {
        q: 'Can it protect compressors?',
        a: 'Yes, blade separators are widely used upstream of compressors to remove carryover.',
      },
      {
        q: 'What materials are available?',
        a: 'Stainless steel and duplex; non-metallic options on request.',
      },
      {
        q: 'Do you provide sizing support?',
        a: 'Yes, we size the separator against your flow rate, pressure and droplet spectrum.',
      },
    ],
  },
  {
    slug: 'ceramic-intalox-saddle',
    name: 'Ceramic Intalox Saddle',
    title: 'Ceramic Intalox Saddle Supplier | Acid Resistant Random Packing',
    h1: 'Ceramic Intalox Saddle (Berl Saddle)',
    metaDescription:
      'Ceramic Intalox saddles for acid absorption, scrubbing and high temperature duty. Better capacity and lower pressure drop than a ceramic Raschig ring.',
    targetKeyword: 'ceramic intalox saddle',
    category: 'random-packing',
    intro:
      'The Intalox saddle solves the problem the Raschig ring created: a ring can nest and block its own surface. A saddle cannot nest, so it keeps its open structure and its surface area in service. In ceramic form it is the packing of choice for acid towers, high temperature absorption and any duty where a ring would either break or channel.',
    specs: [
      { item: 'Shape', value: 'Saddle with concave-convex surfaces, no nesting orientation' },
      { item: 'Compared with Raschig ring', value: 'Higher capacity, lower pressure drop, better surface utilisation' },
      { item: 'Material family', value: 'Ceramic — acid and temperature resistant' },
      { item: 'Key selection inputs', value: 'Medium and concentration, temperature, gas and liquid rates, allowable pressure drop' },
      { item: 'Sizes', value: 'Multiple nominal sizes matched to column diameter and turndown' },
    ],
    materials: ['Acid resistant ceramic', 'Stoneware grade'],
    applications: [
      'Sulphuric acid drying and absorption towers',
      'Hydrochloric acid absorption',
      'Coke oven gas and flue gas scrubbing',
      'High temperature absorption columns',
      'Drying towers with aggressive media',
    ],
    comparison:
      'Against a ceramic Raschig ring the saddle gives more capacity and less pressure drop for the same bed, which usually pays for the higher unit cost within a revamp. Against a ceramic pall ring it is less efficient per unit volume but cheaper and more forgiving in fouling service.',
    faqs: [
      {
        q: 'Why choose a saddle rather than a ring in acid service?',
        a: 'Because saddles do not nest. In a ring bed, rings can align and reduce effective surface; saddles keep an open structure, which matters most in the tall, high-liquid-load beds typical of acid absorption.',
      },
      {
        q: 'Which ceramic grade is used for sulphuric acid?',
        a: 'An acid resistant body selected against the concentration and temperature in the tower. Tell us both and we will specify the grade rather than assume a generic ceramic.',
      },
      {
        q: 'Can these be supplied for a revamp with the same bed volume?',
        a: 'Yes, and often with better performance at the same volume. We compare the existing ring size and the proposed saddle size before quoting.',
      },
    ],
  },
  {
    slug: 'ceramic-super-saddle',
    name: 'Ceramic Super Saddle',
    title: 'Ceramic Super Saddle | Improved Intalox Type Random Packing',
    h1: 'Ceramic Super Saddle (Improved Intalox)',
    metaDescription:
      'Ceramic super saddles with refined geometry for higher capacity and lower pressure drop than standard Intalox saddles in absorption and scrubbing towers.',
    targetKeyword: 'ceramic super saddle',
    category: 'random-packing',
    intro:
      'The super saddle is the Intalox geometry refined: the same non-nesting principle, with a shape that increases open area and reduces the resistance a gas sees as it passes through the bed. The gain is modest per unit volume, but across a tall acid tower it shows up as capacity or as pressure drop you do not have to spend fan power on.',
    specs: [
      { item: 'Shape', value: 'Refined saddle geometry, increased open area' },
      { item: 'Compared with standard Intalox', value: 'Lower pressure drop and slightly higher capacity at similar efficiency' },
      { item: 'Material family', value: 'Ceramic' },
      { item: 'Key selection inputs', value: 'Gas and liquid rates, medium, temperature, allowable pressure drop' },
      { item: 'Replacement note', value: 'Drop-in replacement where the existing bed is a saddle type' },
    ],
    materials: ['Acid resistant ceramic', 'Stoneware grade'],
    applications: [
      'Sulphuric acid absorption towers',
      'Flue gas and tail gas scrubbing',
      'Chemical absorption with aggressive media',
      'High temperature packed towers',
      'Revamps seeking capacity without new vessels',
    ],
    comparison:
      'Against a standard Intalox saddle the gain is incremental and comes mainly in pressure drop; against structured packing it is far cheaper and far more tolerant of fouling, but lower in efficiency. It sits in the middle: better than a ring, more robust than structured packing.',
    faqs: [
      {
        q: 'Is a super saddle worth the extra over a standard saddle?',
        a: 'Where the column is pressure-drop limited or you are pushing capacity, yes. In a new tower with margin to spare, the standard saddle is usually the better economic choice.',
      },
      {
        q: 'Can I mix saddle sizes in one bed?',
        a: 'It is done to improve distribution near the walls and at the top of a bed, but the benefit has to be weighed against the packing work. We will advise on the specific case.',
      },
      {
        q: 'What is the typical failure mode in service?',
        a: 'Breakage during loading or thermal shock, and fouling in dirty service. Both are managed by correct loading practice and by upstream filtration rather than by changing the packing.',
      },
    ],
  },
  {
    slug: 'plastic-multi-faceted-ball',
    name: 'Plastic Multi-Faceted Hollow Ball',
    title: 'Plastic Multi-Faceted Hollow Ball | Scrubber and Degassing Packing',
    h1: 'Plastic Multi-Faceted Hollow Ball',
    metaDescription:
      'Plastic multi-faceted hollow balls for scrubbers, degassing, oil-water separation and cooling tower duty. Very low pressure drop and high void fraction.',
    targetKeyword: 'plastic multi-faceted hollow ball',
    category: 'random-packing',
    intro:
      'Hollow balls are the low-resistance option. With a very high void fraction and a shape that keeps the bed open, they are used where the duty is gas-liquid contact at low pressure drop, degassing, or where a bed must not plug: scrubbers, oil separation, cooling towers and tank covers. Efficiency per unit volume is lower than a ring — the trade is capacity and fouling tolerance.',
    specs: [
      { item: 'Shape', value: 'Hollow sphere with internal facets or ribs' },
      { item: 'Character', value: 'Very high void fraction, low pressure drop, resistant to plugging' },
      { item: 'Material family', value: 'Thermoplastics — PP, PE, PVC and others by medium' },
      { item: 'Key selection inputs', value: 'Medium and temperature, gas and liquid rates, fouling risk, required contact efficiency' },
      { item: 'Common alternative', value: 'Rings where efficiency matters more than pressure drop' },
    ],
    materials: ['PP', 'PE', 'PVC', 'CPVC', 'PVDF on request'],
    applications: [
      'Gas scrubbing and washing towers',
      'Degassing and stripping columns',
      'Oil-water separation and coalescing beds',
      'Cooling tower fill and drift control',
      'Tank covers and floating ball blankets',
    ],
    comparison:
      'Compared with a plastic pall ring, a hollow ball gives much lower pressure drop and far better fouling tolerance but lower mass-transfer efficiency. In scrubbers where the limiting factor is fan power or plugging rather than efficiency, the ball wins; in an absorption column with a purity target, the ring does.',
    faqs: [
      {
        q: 'When is a hollow ball the wrong choice?',
        a: 'When the column has a real separation target. Balls give contact, not high efficiency — if the duty is absorption to a specified outlet concentration, a ring or structured packing is usually needed.',
      },
      {
        q: 'Which plastic suits my medium?',
        a: 'PP for most aqueous and mildly aggressive service, PVC/CPVC where chlorine or higher temperature is involved, PVDF for strong oxidants and solvents. Send the medium and operating temperature.',
      },
      {
        q: 'Do the balls float?',
        a: 'Most plastic grades do, which is exactly why they are used as floating blankets on tanks to cut evaporation and odour. In a packed tower they need a hold-down grid.',
      },
    ],
  },
  {
    slug: 'plastic-heilex-ring',
    name: 'Plastic Heilex Ring',
    title: 'Plastic Heilex Ring Supplier | High Capacity Random Packing',
    h1: 'Plastic Heilex Ring',
    metaDescription:
      'Plastic Heilex rings for high capacity scrubbing and absorption. Open lattice structure gives low pressure drop with better efficiency than a hollow ball.',
    targetKeyword: 'plastic heilex ring',
    category: 'random-packing',
    intro:
      'The Heilex ring is an open lattice construction: not a solid wall with windows, but a framework that keeps the bed open while still turning the gas and spreading the liquid. It sits between the hollow ball and the pall ring — more efficient than a ball, lower pressure drop than a conventional ring — which makes it a common choice in scrubbers and large absorption towers.',
    specs: [
      { item: 'Structure', value: 'Open lattice ring, no continuous wall' },
      { item: 'Character', value: 'Low pressure drop, high capacity, good fouling resistance' },
      { item: 'Position in the range', value: 'Between hollow balls and conventional rings on efficiency and pressure drop' },
      { item: 'Material family', value: 'Thermoplastics' },
      { item: 'Key selection inputs', value: 'Gas and liquid rates, medium, temperature, fouling risk, efficiency target' },
    ],
    materials: ['PP', 'PE', 'CPVC', 'PVDF on request'],
    applications: [
      'Flue gas and tail gas scrubbers',
      'Absorption and cooling towers',
      'Wet scrubbers with dust loading',
      'Stripping columns',
      'Gas washing with high liquid rates',
    ],
    comparison:
      'A pall ring is more efficient per unit volume; a Heilex ring moves more gas for the same pressure drop and resists plugging better. In a scrubber with dust in the gas, the open structure usually wins because a ring bed blinds and the pressure drop climbs.',
    faqs: [
      {
        q: 'How does it compare with a pall ring in a scrubber?',
        a: 'Lower efficiency, lower pressure drop, better fouling tolerance. In dust-laden gas that combination usually outweighs the efficiency difference, because a blinded ring bed loses far more than the theoretical gap.',
      },
      {
        q: 'Can it replace structured packing?',
        a: 'Only where the duty is forgiving. Structured packing is significantly more efficient and more expensive; Heilex rings are chosen when capacity and robustness matter more than a tight outlet specification.',
      },
      {
        q: 'What about liquid distribution?',
        a: 'Open-structure packings still need a proper distributor. Poor initial distribution will channel in any bed, and it is the usual reason a revamp disappoints.',
      },
    ],
  },
  {
    slug: 'plastic-ralu-ring',
    name: 'Plastic Ralu Ring',
    title: 'Plastic Ralu Ring | Grid Structured Random Packing Supplier',
    h1: 'Plastic Ralu Ring',
    metaDescription:
      'Plastic Ralu rings with internal grid structure: high capacity, low pressure drop and good mechanical strength for absorption and scrubbing columns.',
    targetKeyword: 'plastic ralu ring',
    category: 'random-packing',
    intro:
      'The Ralu ring combines a ring outline with an internal grid, which gives it both the strength of a structured element and the handling convenience of a random packing. The result is a packing that holds its shape in deep beds, resists deformation under load, and still delivers low pressure drop — useful where a thin-walled ring would collapse or deform.',
    specs: [
      { item: 'Structure', value: 'Ring with internal grid / lattice, thicker section than a thin-wall ring' },
      { item: 'Character', value: 'High mechanical strength, low pressure drop, good capacity' },
      { item: 'Advantage', value: 'Resists deformation and nesting in deep beds' },
      { item: 'Material family', value: 'Thermoplastics' },
      { item: 'Key selection inputs', value: 'Bed depth, gas and liquid rates, medium, temperature' },
    ],
    materials: ['PP', 'PE', 'CPVC', 'PVDF on request'],
    applications: [
      'Absorption and scrubbing columns',
      'Deep beds where ring deformation is a risk',
      'Marine scrubbers and compact towers',
      'Chemical process absorption',
      'Columns with high liquid loads',
    ],
    comparison:
      'Against a thin-wall pall ring, a Ralu ring trades a little efficiency for mechanical robustness and pressure drop. In deep beds and in towers where the packing is loaded and unloaded repeatedly, that trade is usually worth taking.',
    faqs: [
      {
        q: 'Why does wall thickness matter in a plastic packing?',
        a: 'Because a thin ring deforms under bed load and heat, and a deformed bed channels. The grid structure carries load through the element instead of relying on a thin wall.',
      },
      {
        q: 'Is it suitable for high temperature service?',
        a: 'Within the limits of the polymer chosen. PP has a modest temperature ceiling; CPVC and PVDF extend it. Give us the operating temperature and medium and we will confirm the material.',
      },
      {
        q: 'How is it loaded?',
        a: 'As random packing, in level layers, with the bed kept flat as it rises. Loading method affects performance as much as the element itself.',
      },
    ],
  },
  {
    slug: 'plastic-rosette-ring',
    name: 'Plastic Rosette Ring',
    title: 'Plastic Rosette Ring | Flower Ring Packing for Scrubbers and Cooling Towers',
    h1: 'Plastic Rosette (Flower) Ring',
    metaDescription:
      'Plastic rosette rings for scrubbers, cooling towers and gas washing. Open flower-shaped structure resists plugging and keeps pressure drop low.',
    targetKeyword: 'plastic rosette ring',
    category: 'random-packing',
    intro:
      'The rosette ring — often called a flower ring — is built from a ring of curved petals rather than a closed cylinder. That open geometry gives it high voidage and excellent resistance to plugging, which is why it appears in scrubbers, cooling towers and washing duties where the gas carries dust or the liquid carries solids.',
    specs: [
      { item: 'Structure', value: 'Ring of curved petals / open flower geometry' },
      { item: 'Character', value: 'High voidage, low pressure drop, strong anti-plugging behaviour' },
      { item: 'Position in the range', value: 'Lower efficiency than rings; higher capacity and fouling tolerance' },
      { item: 'Material family', value: 'Thermoplastics' },
      { item: 'Key selection inputs', value: 'Solids loading, gas and liquid rates, temperature, efficiency target' },
    ],
    materials: ['PP', 'PE', 'PVC', 'CPVC'],
    applications: [
      'Wet scrubbers with particulate loading',
      'Cooling towers and heat exchange packing',
      'Gas washing and humidification',
      'Dust removal towers',
      'Waste gas treatment with fouling risk',
    ],
    comparison:
      'Compared with a hollow ball it offers more surface and better contact per unit volume; compared with a pall ring it is far less efficient but far more forgiving. It is chosen where the bed would otherwise plug, not where a tight outlet concentration has to be met.',
    faqs: [
      {
        q: 'Where does a rosette ring perform best?',
        a: 'In washing and cooling duty with dirty gas, where a ring bed would blind. If the column has a separation specification, use a ring or structured packing instead.',
      },
      {
        q: 'Can it be used in cooling towers?',
        a: 'Yes, it is used as splash-type fill where a structured film fill would foul or where the water is dirty.',
      },
      {
        q: 'What sizes are available?',
        a: 'Several nominal sizes to suit tower diameter and the balance between surface area and plugging risk — tell us the duty and we will propose a size.',
      },
    ],
  },
  {
    slug: 'ceramic-structured-packing',
    name: 'Ceramic Structured Packing',
    title: 'Ceramic Structured Packing Supplier | Corrugated Ceramic Packing',
    h1: 'Ceramic Corrugated Structured Packing',
    metaDescription:
      'Ceramic corrugated structured packing for sulphuric acid, FGD and high temperature absorption. Acid resistant, thermally stable, high efficiency per unit volume.',
    targetKeyword: 'ceramic structured packing',
    category: 'structured-packing',
    intro:
      'Structured packing gives the highest efficiency per unit volume of any packing type, but metal cannot survive hot acid and plastic cannot survive the temperature. Ceramic corrugated packing fills that gap: the same ordered, cross-corrugated geometry in a body that resists sulphuric acid and operates at temperatures where polymers are out of the question.',
    specs: [
      { item: 'Geometry', value: 'Cross-corrugated ceramic sheets, ordered block structure' },
      { item: 'Efficiency', value: 'Highest of the packing types per unit volume, with low pressure drop per theoretical stage' },
      { item: 'Material character', value: 'Acid resistant ceramic; thermally stable at high temperature' },
      { item: 'Key selection inputs', value: 'Medium and concentration, temperature, gas and liquid loads, efficiency target' },
      { item: 'Handling', value: 'Supplied in blocks; requires care in loading to keep sheets aligned and undistorted' },
      { item: 'Grades', value: 'Several surface-area grades available — advise duty for selection' },
    ],
    materials: ['Acid resistant ceramic', 'Silicate ceramic'],
    applications: [
      'Sulphuric acid drying and absorption towers',
      'Flue gas desulphurisation and tail gas treatment',
      'Coke oven gas desulphurisation',
      'High temperature absorption and stripping',
      'Nitric and hydrochloric acid absorption',
    ],
    comparison:
      'Against ceramic random packing it is far more efficient per unit volume and lower in pressure drop, at higher cost and with much stricter loading requirements. Against metal structured packing it is heavier and more fragile, but it is the only option in hot acid where metal corrodes.',
    faqs: [
      {
        q: 'Why not use metal structured packing in acid service?',
        a: 'Because it corrodes. In sulphuric acid drying and absorption, and in FGD with chlorides present, the metal either fails or contaminates the product — ceramic is the standard answer.',
      },
      {
        q: 'How is it installed?',
        a: 'In ordered blocks, layer by layer, with each block seated square and the sheets undistorted. A distorted block channels and loses most of the benefit of structured packing.',
      },
      {
        q: 'Can it replace random packing in an existing tower?',
        a: 'Often yes, with a shorter bed for the same duty — but the support, distributor and pressure-drop budget all have to be checked. Send the column data and we will compare both options.',
      },
    ],
  },
];
