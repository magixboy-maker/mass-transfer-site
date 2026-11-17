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
  /** 材质/型式细分页入口（用于总览页导流，如 Raschig Ring 的金属/塑料/陶瓷三版） */
  variants?: { label: string; href: string; desc: string }[];
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
      'The Raschig ring is the cheapest and simplest packing but has the lowest capacity of the common geometries. For new columns, a pall ring or saddle usually pays back through smaller diameter or lower energy cost; Raschig rings still win for very simple or fouling service. In practice the material decision matters more than the geometry: metal where the duty is hot or solvent-laden, plastic where the stream is acidic and below 100–140 °C, ceramic where acid and temperature rule out both.',
    variants: [
      {
        label: 'Metal Raschig Ring',
        href: '/random-packing/raschig-ring-metal/',
        desc: 'SS304, SS316L and carbon steel, 16–100 mm. High temperature, no breakage, solvent resistant.',
      },
      {
        label: 'Plastic Raschig Ring',
        href: '/random-packing/raschig-ring-plastic/',
        desc: 'PP, CPVC, PVDF and PTFE. Acid absorption and scrubbing, one-seventh the weight of ceramic.',
      },
      {
        label: 'Ceramic Raschig Ring',
        href: '/random-packing/raschig-ring-ceramic/',
        desc: 'Acid-resistant stoneware for sulphuric acid drying, HCl absorption and chlorine drying.',
      },
    ],
    faqs: [
      {
        q: 'Metal, plastic or ceramic — how do I choose?',
        a: 'Start from the medium and the temperature. Clean streams below 100 °C with acid or caustic go to PP; 100–140 °C or chlorinated solvents go to PVDF; HF and wet chlorine need PTFE. Above the plastic limit, or where the stream carries solvents, use metal. Concentrated sulphuric acid, chlorine drying and hot acid where no metal survives take ceramic. Weight and support plate capacity then decide between metal and ceramic.',
      },
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
    slug: 'raschig-ring-metal',
    name: 'Metal Raschig Ring',
    image: '/images/products/raschig-ring-metal.webp',
    title: 'Metal Raschig Ring Supplier | SS304, SS316L & Carbon Steel Rings',
    h1: 'Metal Raschig Ring (SS304 / SS316L)',
    metaDescription:
      'Metal Raschig rings in SS304, SS316, SS316L and carbon steel from 16 to 100 mm. Seam-welded construction for distillation, stripping and high-temperature absorption.',
    targetKeyword: 'metal raschig ring',
    category: 'random-packing',
    intro:
      'The metal Raschig ring is the version of the classic cylinder that survives where plastic and ceramic cannot: high temperature, thermal cycling, solvent attack, and columns that are opened and reloaded often without wanting a single broken piece in the bed. It is the cheapest metal random packing per cubic metre and still the default choice for simple duties where capacity is not the constraint.',
    specs: [
      { item: 'Nominal size', value: '16 mm / 25 mm / 38 mm / 50 mm / 76 mm / 100 mm' },
      { item: 'Material', value: 'SS304, SS316, SS316L, carbon steel, copper' },
      { item: 'Specific surface area', value: '60–340 m²/m³ (size dependent)' },
      { item: 'Void fraction', value: '88–95%' },
      { item: 'Bulk density', value: 'SS304: 300–700 kg/m³ (size and wall dependent)' },
      { item: 'Wall thickness', value: '0.4–1.2 mm, selected against column load' },
      { item: 'Construction', value: 'Seam-welded strip, or drawn tube for heavy walls' },
      { item: 'Packing factor', value: '58–180 m⁻¹' },
    ],
    materials: ['SS304', 'SS316', 'SS316L', 'Carbon steel', 'Copper'],
    applications: [
      'Vacuum and high-temperature distillation',
      'Solvent recovery and stripping',
      'Direct-contact cooling and heat exchange',
      'Absorption columns above the plastic temperature limit',
      'Columns subject to frequent opening and reloading',
    ],
    comparison:
      'Against a ceramic Raschig ring of the same size, the metal version will not shatter on loading and carries a thinner wall, so it holds more void fraction and roughly 15–25% more capacity. Against a plastic ring it survives temperatures and solvents that would soften or swell PP. Against a metal pall ring it is cheaper per cubic metre but gives up about 40% of capacity, which is the trade you are making: price of the packing against diameter of the column.',
    faqs: [
      {
        q: 'Should I specify SS304 or SS316L?',
        a: 'SS304 covers clean hydrocarbon, steam and general refinery service. SS316L adds molybdenum and is the correct choice for chloride-bearing streams, sour gas, seawater cooling and any duty with a real risk of pitting. The price difference is small next to the cost of a re-packing.',
      },
      {
        q: 'What wall thickness do you recommend?',
        a: 'Wall thickness is a mechanical decision, not a mass-transfer one. Deep beds and large column diameters load the bottom rings hardest, so we size the wall against your bed depth and support plate design — typically 0.4–0.6 mm for shallow beds and 0.8–1.2 mm for deep or large-diameter columns.',
      },
      {
        q: 'Can you supply non-standard diameters?',
        a: 'Yes. Rings outside the standard 16–100 mm range, and rings in alloys such as 2205, 904L or Monel, are made to order. Send the drawing or the operating conditions and we will confirm feasibility and lead time.',
      },
      {
        q: 'Why use copper Raschig rings?',
        a: 'Copper rings are used in a few specialised duties where the metal itself takes part in the process — for example removing residual oxygen or certain sulphur compounds from a gas stream. In ordinary mass transfer service there is no reason to pay for copper.',
      },
      {
        q: 'How does it compare with a metal pall ring on cost?',
        a: 'A Raschig ring uses less strip per cubic metre and needs no slotting or internal tongue, so it is cheaper to buy. The pall ring usually wins overall because its higher capacity lets you use a smaller column or a shallower bed. Where the column already exists and the duty is undemanding, the Raschig ring is the economical refill.',
      },
    ],
  },
  {
    slug: 'raschig-ring-plastic',
    name: 'Plastic Raschig Ring',
    image: '/images/products/raschig-ring-plastic.webp',
    title: 'Plastic Raschig Ring Manufacturer | PP, PVDF, CPVC & PTFE',
    h1: 'Plastic Raschig Ring (PP / PVDF / PTFE)',
    metaDescription:
      'Plastic Raschig rings in PP, PVDF, CPVC and PTFE for acid absorption, gas scrubbing and stripping. Light, chemically resistant and low in cost per cubic metre.',
    targetKeyword: 'plastic raschig ring',
    category: 'random-packing',
    intro:
      'The plastic Raschig ring is the workhorse of scrubbing and acid absorption. It weighs a fraction of ceramic, does not break in handling, needs a far lighter support plate, and costs less per cubic metre than any other random packing we supply. Its limits are temperature and, for some grades, the solvent in the stream — both of which are known before the order, not after.',
    specs: [
      { item: 'Nominal size', value: '16 mm / 25 mm / 38 mm / 50 mm / 76 mm' },
      { item: 'Material', value: 'PP, CPVC, PVDF, PTFE' },
      { item: 'Specific surface area', value: '90–340 m²/m³ (size dependent)' },
      { item: 'Void fraction', value: '88–94%' },
      { item: 'Bulk density', value: 'PP: 80–140 kg/m³; PVDF: 130–190 kg/m³' },
      { item: 'Wall thickness', value: '1.0–3.0 mm, size dependent' },
      { item: 'Max service temperature', value: 'PP 100 °C · CPVC 95 °C · PVDF 140 °C · PTFE 250 °C' },
      { item: 'Packing factor', value: '55–170 m⁻¹' },
    ],
    materials: ['PP', 'CPVC', 'PVDF', 'PTFE'],
    applications: [
      'HCl, H₂SO₄ and mixed acid absorption',
      'Caustic and amine gas scrubbing',
      'CO₂ and H₂S removal',
      'Ammonia and VOC stripping in wastewater treatment',
      'Cooling towers and humidification',
    ],
    comparison:
      'Against a ceramic Raschig ring the plastic version is about one-seventh the weight, does not break, and allows a much lighter support structure — but it stops at 100–140 °C in PP or PVDF. Against a plastic pall ring it is cheaper and simpler, at roughly 35–40% less capacity for the same nominal size. Against metal it wins on acid resistance and on cost, and loses on temperature and on mechanical strength in deep beds.',
    faqs: [
      {
        q: 'PP or PVDF — which one do I need?',
        a: 'PP is the default for hydrochloric and sulphuric acid absorption, caustic scrubbing and general gas washing up to about 100 °C. Move to PVDF when the temperature runs 100–140 °C, or when the stream carries chlorinated hydrocarbons or oxidising species that attack PP.',
      },
      {
        q: 'When is PTFE actually necessary?',
        a: 'PTFE is the answer for hydrofluoric acid, wet chlorine, hot concentrated caustic and any duty where trace metal ions or degraded polymer cannot be tolerated in the product. It costs several times PP, so it is used where nothing else survives rather than as a general upgrade.',
      },
      {
        q: 'Can plastic rings be used in HF service?',
        a: 'Yes, in PTFE or PVDF depending on concentration and temperature. Ceramic cannot be used at all — hydrofluoric acid attacks the silica in the body — and stainless steel is also unsuitable. This is one of the few duties where plastic is the only practical option.',
      },
      {
        q: 'How much load does a plastic bed put on the support plate?',
        a: 'Roughly one-seventh of a ceramic bed of the same depth, which often lets a revamp add bed depth without changing the support structure. We calculate the wet bed load, including liquid holdup, for your support plate design.',
      },
      {
        q: 'Do plastic rings need a different distributor?',
        a: 'No, but the lighter bed is easier to fluidise and easier to disturb with a badly aimed inlet. If the column has a side entry close to the bed, a hold-down grid or a deeper top layer of the same rings is worth specifying.',
      },
    ],
  },
  {
    slug: 'raschig-ring-ceramic',
    name: 'Ceramic Raschig Ring',
    image: '/images/products/raschig-ring-ceramic.webp',
    title: 'Ceramic Raschig Ring Supplier | Acid-Resistant Stoneware Packing',
    h1: 'Ceramic Raschig Ring',
    metaDescription:
      'Acid-resistant ceramic Raschig rings for sulphuric acid drying towers, HCl absorption and chlorine drying. High temperature tolerance, low cost, proven in acid plants.',
    targetKeyword: 'ceramic raschig ring',
    category: 'random-packing',
    intro:
      'The ceramic Raschig ring is the oldest packing still in daily service, and in acid plants it is still the one most beds are filled with. Chemical stoneware shrugs off sulphuric acid, hydrochloric acid, chlorine and oxidising media that destroy metal, and it holds its shape at temperatures where every plastic has already failed. What it will not tolerate is hydrofluoric acid, thermal shock, or rough handling.',
    specs: [
      { item: 'Nominal size', value: '25 mm / 38 mm / 50 mm / 76 mm / 100 mm' },
      { item: 'Material', value: 'Acid-resistant chemical stoneware / porcelain' },
      { item: 'Specific surface area', value: '50–190 m²/m³ (size dependent)' },
      { item: 'Void fraction', value: '70–80%' },
      { item: 'Bulk density', value: '600–750 kg/m³' },
      { item: 'Water absorption', value: 'Below 1%' },
      { item: 'Max service temperature', value: 'Up to about 1000 °C, subject to thermal shock limits' },
      { item: 'Acid resistance', value: 'Good in H₂SO₄, HCl, HNO₃, chlorine; not suitable for HF' },
    ],
    materials: ['Acid-resistant ceramic', 'Porcelain'],
    applications: [
      'Sulphuric acid drying towers (concentrated H₂SO₄)',
      'Hydrochloric acid absorption',
      'Chlorine drying and scrubbing',
      'NOx and SO₂ absorption',
      'High-temperature gas washing and cooling',
    ],
    comparison:
      'Against a plastic Raschig ring the ceramic version takes four to eight times the temperature and resists solvents entirely, at roughly seven times the weight and with a real risk of breakage in handling. Against a metal ring it wins on acid resistance and price and loses on strength — a ceramic bed cannot take the mechanical abuse a steel bed can. Against a ceramic pall ring or saddle it is cheaper and lower in capacity, which is why it survives in acid towers where the duty is simple and the volume is large.',
    faqs: [
      {
        q: 'Can ceramic Raschig rings be used with hydrofluoric acid?',
        a: 'No. HF attacks the silica in the ceramic body and will destroy the packing. For HF service use PTFE or carbon packing instead. The same applies to fluorosilicate-bearing streams.',
      },
      {
        q: 'What is the breakage rate in transport and loading?',
        a: 'For well-packed standard rings, breakage in transport is normally in the low single-digit percent and is covered in the quoted quantity. Loading through a chute with a soft landing, rather than dropping the bed from height, is the single biggest factor — we can advise on the loading method for large fills.',
      },
      {
        q: 'Ceramic Raschig ring or ceramic pall ring?',
        a: 'The pall ring gives roughly 30–40% more capacity and better surface utilisation for a modest price increase, and it is what we would recommend for a new tower. The Raschig ring stays competitive in very large acid towers where the bed is deep, the duty is simple, and the price per cubic metre dominates the decision.',
      },
      {
        q: 'How do I size the support plate for a ceramic bed?',
        a: 'Use the wet bulk density, not the dry figure — a ceramic bed holding acid is significantly heavier. We provide the wet loading per metre of bed depth for your support plate and beam design.',
      },
      {
        q: 'Is thermal shock a problem?',
        a: 'Yes, it is the main failure mode in ceramic beds. Sudden heating or cooling, and liquid slugs hitting a hot bed, will crack rings. If the column cycles, heat up and cool down slowly and keep liquid out of a hot bed.',
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
    image: '/images/products/vane-type.webp',
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
    image: '/images/products/blade-type.webp',
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
    image: '/images/products/ceramic-intalox-saddle.webp',
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
    image: '/images/products/ceramic-super-saddle.webp',
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
    image: '/images/products/plastic-multi-faceted-ball.webp',
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
    image: '/images/products/plastic-heilex-ring.webp',
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
    image: '/images/products/plastic-ralu-ring.webp',
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
    image: '/images/products/plastic-rosette-ring.webp',
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
    image: '/images/products/ceramic-structured-packing.webp',
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
  {
    slug: 'ptfe-pall-ring',
    name: 'PTFE Pall Ring',
    image: '/images/products/ptfe-pall-ring.webp',
    title: 'PTFE Pall Ring Supplier | Teflon Tower Packing for HF and Strong Acids',
    h1: 'PTFE Pall Ring (Teflon Tower Packing)',
    metaDescription:
      'PTFE pall rings and Raschig rings for HF, wet chlorine, strong acids and hot alkali. Chemically inert, no metal ion leaching, service up to about 250 C.',
    targetKeyword: 'PTFE pall ring',
    category: 'random-packing',
    intro:
      'PTFE is what you specify when nothing else survives. A PTFE pall ring keeps the open, ribbed geometry of a metal or plastic pall ring while removing the two failure modes that decide column life in aggressive service: chemical attack, and metal ion leaching into the product. It is used where hydrofluoric acid, wet chlorine, bromine, hot concentrated sulphuric acid or strong alkali would destroy ceramic, PP or stainless within months.',
    specs: [
      { item: 'Form', value: 'Ribbed pall ring with internal tongue, moulded' },
      { item: 'Material', value: 'Virgin PTFE; PTFE with graphite or glass on request' },
      { item: 'Nominal sizes', value: '25 mm, 38 mm, 50 mm' },
      { item: 'Service temperature', value: 'Up to about 250 C continuous, far beyond PP or PVDF' },
      { item: 'Chemical resistance', value: 'Inert to virtually all acids, bases, halogens and solvents' },
      { item: 'Mechanical note', value: 'Softer than ceramic or metal; bed depth has to be checked for creep load' },
      { item: 'Selection inputs', value: 'Column diameter, gas and liquid loads, temperature, trace contaminants' },
    ],
    materials: ['Virgin PTFE', 'PTFE with graphite', 'PTFE with glass fibre on request'],
    applications: [
      'HF absorption and stripping',
      'Chlor-alkali and wet chlorine scrubbing',
      'Bromine and halogen handling',
      'Hot concentrated acid absorption',
      'High-purity duty where metal ions are not acceptable',
      'Solvent recovery where plastics swell',
    ],
    comparison:
      'Against ceramic, PTFE removes the HF and hot-alkali attack problem and survives thermal shock, at a higher price per cubic metre and with lower mechanical stiffness, which matters when the bed is deep. Against PP and PVDF it extends the usable temperature range and covers oxidising acids that would embrittle either. Against metal it removes corrosion entirely, and with it the risk of iron or nickel contamination in the product.',
    faqs: [
      {
        q: 'Why choose PTFE instead of ceramic for an acid tower?',
        a: 'Ceramic is cheaper and stiffer, but silica-based bodies are attacked by HF and by hot concentrated alkali, and thermal shock can crack them. PTFE is unaffected by either. If the tower handles HF, wet chlorine or hot caustic, PTFE is usually the only packing that survives a realistic campaign length.',
      },
      {
        q: 'What is the maximum service temperature?',
        a: 'About 250 C continuously for virgin PTFE, well above PP or PVDF. Above that, or where the bed load is very high, a metal or ceramic packing is the better choice: the limitation of PTFE in a deep bed is mechanical rather than chemical.',
      },
      {
        q: 'Can the packing be re-used after a shutdown?',
        a: 'Yes. It does not corrode or embrittle, so it can be washed, inspected and re-loaded, and it is often recovered and re-used when a column is re-packed with a different geometry.',
      },
      {
        q: 'Does the softness of PTFE cause problems?',
        a: 'It can creep under load. In deep beds we specify a properly designed support plate and, at larger diameters, a thicker wall; we check the load against your bed depth before quoting rather than after.',
      },
    ],
  },
  {
    slug: 'ceramic-berl-saddle',
    name: 'Ceramic Berl Saddle',
    image: '/images/products/ceramic-berl-saddle.webp',
    title: 'Ceramic Berl Saddle Supplier | Acid-Proof Saddles for Absorption Towers',
    h1: 'Ceramic Berl Saddle',
    metaDescription:
      'Berl saddles in chemical stoneware for acid absorption, drying towers and scrubbers. Lower pressure drop than Raschig rings, lower cost than Intalox saddles.',
    targetKeyword: 'ceramic Berl saddle',
    category: 'random-packing',
    intro:
      'The Berl saddle is the oldest of the saddle family and still one of the most practical. Its arched shape stacks less densely than a ring, so gas finds a path through the bed with less resistance, and liquid spreads sideways along the curved surface instead of running straight down. For acid absorption, drying and cooling towers where the duty is dirty and the budget is tight, it remains a sound choice.',
    specs: [
      { item: 'Form', value: 'Arched saddle, no internal partitions' },
      { item: 'Nominal sizes', value: '25 mm, 38 mm, 50 mm, 76 mm' },
      { item: 'Material', value: 'Chemical stoneware and acid-proof porcelain' },
      { item: 'Porosity', value: 'Low: dense body that resists acid penetration' },
      { item: 'Thermal behaviour', value: 'Handles normal drying tower cycling; avoid quenching a hot bed' },
      { item: 'Loading', value: 'Random dumped over a graded support layer' },
      { item: 'Selection inputs', value: 'Tower diameter, gas and liquid rates, acid concentration and temperature' },
    ],
    materials: ['Chemical stoneware', 'Acid-proof porcelain'],
    applications: [
      'Sulphuric acid drying and absorption towers',
      'Hydrochloric acid absorption',
      'Scrubbers and gas cooling towers',
      'Drying of chlorine and other wet gases',
      'Pickling line and fume scrubbing',
    ],
    comparison:
      'Against a ceramic Raschig ring the Berl saddle gives lower pressure drop and higher capacity for a modest cost increase. Against an Intalox saddle it is cheaper and more open, but its liquid redistribution is weaker, so it suits shallow beds better than tall ones. Against a modern high-performance ring it is heavier and less efficient, which is why it is chosen for robustness and price rather than for performance.',
    faqs: [
      {
        q: 'Berl saddle or Intalox saddle?',
        a: 'Berl is the cheaper, more open shape; Intalox redistributes liquid better and gives higher efficiency in a tall bed. For a shallow, dirty scrubber Berl is usually enough. Where the tower height is set by mass transfer, Intalox or a high-performance ring is the better investment.',
      },
      {
        q: 'Which size should I use?',
        a: 'Small sizes give more surface per cubic metre and suit smaller diameter towers; large sizes keep pressure drop down in big towers. As a rule the packing should be a modest fraction of the column diameter so the bed does not bridge against the wall.',
      },
      {
        q: 'Will the saddles break in service?',
        a: 'Not if they are loaded and wetted properly. Failures come from thermal shock, such as dumping cold liquid into a hot bed, and from point loading on a badly designed support. We size the support layer together with the packing.',
      },
      {
        q: 'Can it handle hydrofluoric acid?',
        a: 'No. Ceramic bodies are attacked by HF. For HF duty use PTFE packing instead, and check that the support and internals are suitable as well.',
      },
    ],
  },
  {
    slug: 'ceramic-cross-ring',
    name: 'Ceramic Cross Partition Ring',
    image: '/images/products/ceramic-cross-ring.webp',
    title: 'Ceramic Cross Partition Ring | Heat Storage and Dust-Laden Gas Duty',
    h1: 'Ceramic Cross Partition Ring',
    metaDescription:
      'Ceramic cross partition rings for dust-laden gas cooling, heat storage and acid towers. Thick-walled, high crushing strength, tolerant of thermal cycling.',
    targetKeyword: 'ceramic cross partition ring',
    category: 'random-packing',
    intro:
      'A cross partition ring is a ring with internal cross walls. That one detail changes what the packing is good at. The partitions carry load far better than an open ring, so the shape survives deep beds and dirty service, while the divided internal volume keeps splitting and recombining the gas path. It is the shape you reach for when the duty is dusty, hot, or both.',
    specs: [
      { item: 'Form', value: 'Ring with internal cross partitions' },
      { item: 'Nominal sizes', value: '25 mm to 100 mm' },
      { item: 'Material', value: 'Chemical stoneware; high-alumina body for hotter duty' },
      { item: 'Strength', value: 'Thick walls give high crushing strength for deep beds' },
      { item: 'Duty', value: 'Heat exchange, gas cooling, dust-tolerant mass transfer' },
      { item: 'Fouling', value: 'Better than a fine ring, but the bed still needs a washing provision' },
      { item: 'Selection inputs', value: 'Gas temperature and dust loading, bed depth, cooling medium, allowable pressure drop' },
    ],
    materials: ['Chemical stoneware', 'High alumina body'],
    applications: [
      'Dust-laden gas cooling and washing towers',
      'Heat storage and regenerative heat exchange',
      'Sulphuric acid drying towers',
      'Gas cooling ahead of scrubbing',
      'Combustion air and hot blast preheating beds',
    ],
    comparison:
      'Against a Berl saddle the cross ring is heavier and gives less surface per cubic metre, but it resists crushing and stands up to dust far better because the partitions stop the bed compacting. Against structured packing it is far more tolerant of fouling, which is why it survives gas streams that would blind a structured element within weeks.',
    faqs: [
      {
        q: 'Why use a partitioned ring instead of an open ring?',
        a: 'The internal walls carry load, so a deep bed does not crush the bottom layer, and they divide the gas path so the stream is repeatedly split and recombined. In dust-laden duty that also stops stable channels forming.',
      },
      {
        q: 'Is it used for mass transfer or heat transfer?',
        a: 'Both, but its strength is heat duty with dirty gas. Where the job is pure mass transfer in a clean stream, a shape with more surface area will be more efficient per metre of bed.',
      },
      {
        q: 'How do I keep the bed from blocking with dust?',
        a: 'Design in a flushing or soot-blowing cycle and choose a larger nominal size than you would for a clean stream. A coarse bed with periodic washing beats a fine bed that blinds.',
      },
      {
        q: 'Which body should I choose?',
        a: 'Stoneware for acid duty at moderate temperature. Where the bed runs hot or cycles thermally, a high-alumina body with better thermal shock resistance is the safer choice.',
      },
    ],
  },
  {
    slug: 'ceramic-y-partition-ring',
    name: 'Ceramic Y-Type Partition Ring',
    image: '/images/products/ceramic-y-partition-ring.webp',
    title: 'Ceramic Y-Partition Ring | Heat Storage and Acid Scrubber Packing',
    h1: 'Ceramic Y-Type Partition Ring',
    metaDescription:
      'Ceramic Y-partition rings with Y-shaped internal walls for regenerative heat storage, gas cooling and acid scrubber duty. High strength with an open geometry.',
    targetKeyword: 'ceramic Y partition ring',
    category: 'random-packing',
    intro:
      'The Y partition ring places Y-shaped walls inside a ceramic ring, so the internal volume is divided into passages that keep the shape stiff while giving gas a tortuous path through the bed. Compared with a plain ring it holds its form under load, and compared with a cross-partition ring it leaves more open volume, which keeps pressure drop lower where flow is high.',
    specs: [
      { item: 'Form', value: 'Ring with internal Y-shaped partitions' },
      { item: 'Nominal sizes', value: '38 mm to 100 mm' },
      { item: 'Material', value: 'Chemical stoneware; high-alumina on request' },
      { item: 'Strength', value: 'Partitioned walls give good crushing strength at moderate weight' },
      { item: 'Duty', value: 'Heat storage, gas cooling, absorption in acid service' },
      { item: 'Loading', value: 'Random dumped over a graded support layer' },
      { item: 'Selection inputs', value: 'Gas flow and temperature, bed depth, allowable pressure drop, acid environment' },
    ],
    materials: ['Chemical stoneware', 'High alumina on request'],
    applications: [
      'Regenerative heat storage beds',
      'Hot gas cooling towers',
      'Acid absorption and scrubbing',
      'Sulphuric acid plant duty',
      'Emission control washing towers',
    ],
    comparison:
      'Against the cross partition ring the Y shape is more open, so pressure drop is lower and the bed fouls less quickly, at some cost in surface area and strength. Against a Berl saddle it is stronger and better able to carry a deep bed. In practice the choice between Y ring and cross ring comes down to whether the limiting factor is pressure drop or bed strength.',
    faqs: [
      {
        q: 'Y ring or cross ring?',
        a: 'If pressure drop or dust is the constraint, the Y ring. If bed depth and crushing load are the constraint, the cross ring. Both are ceramic, so neither is suitable for HF.',
      },
      {
        q: 'What is it used for in a sulphuric acid plant?',
        a: 'Mainly as heat storage and gas cooling media, and in drying tower duty. It tolerates the acid and the thermal cycling that the duty imposes, which is what limits other materials.',
      },
      {
        q: 'How deep a bed can it carry?',
        a: 'That depends on body strength and size. Send us the bed depth and the liquid load and we will check the crushing load and recommend the support layer grading.',
      },
      {
        q: 'Is a high-alumina version available?',
        a: 'Yes, on request, where the operating temperature or thermal cycling is beyond what stoneware handles comfortably.',
      },
    ],
  },
  {
    slug: 'metal-cascade-mini-ring',
    name: 'Metal Cascade Mini Ring',
    image: '/images/products/metal-cascade-mini-ring.webp',
    title: 'Metal Cascade Mini Ring (CMR) | High Capacity Random Packing',
    h1: 'Metal Cascade Mini Ring (CMR)',
    metaDescription:
      'Metal cascade mini rings in SS304, SS316L and carbon steel for vacuum distillation and column debottlenecking. High capacity, low pressure drop per stage.',
    targetKeyword: 'metal cascade mini ring',
    category: 'random-packing',
    intro:
      'The cascade mini ring was designed for one purpose: getting more capacity out of a column that is already built. Its shallow, asymmetric shape stacks with a preferred orientation, so the bed has a high void fraction and a short gas path. The result is a lower pressure drop per theoretical stage than a pall ring, which in vacuum service translates directly into either more throughput or a better separation at the same boil-up.',
    specs: [
      { item: 'Form', value: 'Shallow asymmetric ring with stepped, cascading wall' },
      { item: 'Material', value: 'SS304, SS316L, carbon steel; other alloys on request' },
      { item: 'Nominal sizes', value: '25 mm, 38 mm, 50 mm, 70 mm' },
      { item: 'Strength', value: 'Lower mechanical strength than a pall ring; bed depth has to be checked' },
      { item: 'Duty', value: 'Vacuum and heat-sensitive distillation; debottlenecking' },
      { item: 'Loading', value: 'Orientation matters: load by the specified method, not by random dumping' },
      { item: 'Selection inputs', value: 'Column diameter, vapour and liquid loads, stages required, vacuum level' },
    ],
    materials: ['SS304', 'SS316L', 'Carbon steel', 'Duplex and other alloys on request'],
    applications: [
      'Vacuum distillation',
      'Debottlenecking existing columns',
      'Heat-sensitive product separation',
      'Absorption and stripping at high liquid load',
      'Fatty acid and glycerine distillation',
      'Solvent recovery under vacuum',
    ],
    comparison:
      'Against a metal pall ring the CMR gives higher capacity and lower pressure drop per stage, but it is weaker mechanically and less forgiving of poor liquid distribution. Against structured packing it is far cheaper, easier to install through a manway, and it does not lose performance when the column is slightly out of level. Where a column is capacity-limited and the product is heat-sensitive, CMR is often the cheapest debottleneck available.',
    faqs: [
      {
        q: 'Can I replace pall rings with CMR in an existing column?',
        a: 'Usually yes, and it is one of the most common revamps we quote. The capacity gain normally comes with a change in bed depth, so the hydraulics have to be rechecked. Send the existing packing size, bed height and operating data and we will do that.',
      },
      {
        q: 'Why is CMR weaker than a pall ring?',
        a: 'The wall is thinner and the shape more open, which is exactly what keeps void fraction high. In a deep bed that matters, because the bottom layer carries everything above it, so we check the load before recommending it for a tall column.',
      },
      {
        q: 'Does it work in vacuum service?',
        a: 'That is where it performs best. At low pressure the gas-phase pressure drop dominates the separation, so a packing that minimises it per stage is worth more than one with marginally higher efficiency per metre.',
      },
      {
        q: 'Is loading orientation really critical?',
        a: 'Yes. CMR is designed to nest in a preferred orientation. Loaded by the specified method the capacity advantage is real; dumped at random from a bag it is largely lost.',
      },
    ],
  },
  {
    slug: 'super-raschig-ring',
    name: 'Super Raschig Ring',
    image: '/images/products/super-raschig-ring.webp',
    title: 'Super Raschig Ring | Partitioned Ring for Higher Efficiency',
    h1: 'Super Raschig Ring',
    metaDescription:
      'Super Raschig rings with internal partitions, in ceramic, metal and plastic. Higher efficiency and better liquid renewal than a plain Raschig ring at low cost.',
    targetKeyword: 'super Raschig ring',
    category: 'random-packing',
    intro:
      'A super Raschig ring is a plain Raschig ring with internal partition walls added. The change is small and the effect is not: the partitions break up the gas path, increase the effective surface per cubic metre and repeatedly renew the liquid film, which is the mechanism that limits a plain ring. It is the cheapest way to get more efficiency out of a column that is already fitted with Raschig rings.',
    specs: [
      { item: 'Form', value: 'Ring with one or more internal partition walls' },
      { item: 'Material', value: 'Ceramic, carbon steel, stainless steel, PP and PVDF' },
      { item: 'Nominal sizes', value: '25 mm, 38 mm, 50 mm, 76 mm' },
      { item: 'Versus plain Raschig', value: 'Higher efficiency and better liquid renewal, slightly higher pressure drop' },
      { item: 'Strength', value: 'Partitions stiffen the ring, so it carries a deeper bed than a plain ring' },
      { item: 'Loading', value: 'Random dumped; no orientation requirement' },
      { item: 'Selection inputs', value: 'Column diameter, loads, required efficiency, medium and temperature' },
    ],
    materials: ['Ceramic', 'Carbon steel', 'SS304 / SS316L', 'PP', 'PVDF'],
    applications: [
      'Absorption and stripping columns',
      'Drying towers and acid towers',
      'Scrubbers and gas washing',
      'Heat exchange and cooling towers',
      'Replacement of plain Raschig rings for a capacity or efficiency gain',
    ],
    comparison:
      'Against a plain Raschig ring it raises efficiency per metre of bed at a small pressure drop penalty, and its partitions make it stiffer, so it can carry a deeper bed. Against a pall ring it is cheaper and simpler to make in ceramic, but the pall ring still wins on capacity because its wall is open rather than solid.',
    faqs: [
      {
        q: 'Is it worth replacing plain Raschig rings with super Raschig rings?',
        a: 'If the column is efficiency-limited rather than capacity-limited, often yes, and it is the cheapest upgrade available because the bed geometry barely changes. We will check the pressure drop penalty against your blower margin before recommending it.',
      },
      {
        q: 'Which materials are available?',
        a: 'Ceramic for acid and high temperature duty, carbon and stainless steel where mechanical strength matters, and PP or PVDF for milder chemical service at lower cost.',
      },
      {
        q: 'How does it compare with a pall ring?',
        a: 'The pall ring has an open wall, so gas passes through the ring and capacity is higher. The super Raschig keeps a solid wall and gains its efficiency from internal partitions instead, which makes it cheaper to produce in ceramic and more robust in dirty service.',
      },
      {
        q: 'Can it be used in an existing ceramic tower?',
        a: 'Yes. Same nominal sizes, same loading method, same support design. In most cases the bed can be re-loaded size for size with no mechanical changes.',
      },
    ],
  },
  {
    slug: 'metal-random-packing',
    name: 'Metal Random Packing Shapes',
    image: '/images/products/metal-random-packing.webp',
    title: 'Metal Random Packing | Tellerette, Nutter, VSP, Dixon and Cannon Rings',
    h1: 'Metal Random Packing Shapes',
    metaDescription:
      'Metal random packing beyond pall rings: Tellerette, Nutter, VSP, Dixon, Cannon and triangle spiral rings in stainless and carbon steel for revamps and special duties.',
    targetKeyword: 'metal random packing',
    category: 'random-packing',
    intro:
      'Pall rings, Raschig rings and cascade mini rings cover most metal random packing duty, but not all of it. The rest of the family exists because each shape solves a specific limitation: fouling, liquid hold-up, pressure drop in a very tall bed, or the height of a laboratory column where a few centimetres of packing has to do the work of a metre. This page is the map of those shapes, so you can tell us which constraint you are fighting rather than which name you have heard.',
    specs: [
      { item: 'Tellerette type', value: 'Open spiral form with high voidage; wins where fouling and liquid hold-up matter more than efficiency' },
      { item: 'Nutter type', value: 'Ring with slotted wall and internal tongues; high capacity for refinery and gas treating columns' },
      { item: 'VSP type', value: 'Ring with vertical slotted walls; low pressure drop at high liquid load' },
      { item: 'Dixon type', value: 'Fine gauze ring for small diameter and laboratory columns; very high efficiency per metre' },
      { item: 'Cannon type', value: 'Ring with internal baffle for pilot and laboratory distillation' },
      { item: 'Triangle spiral type', value: 'Wire spiral form for laboratory rectification where bed height is the limit' },
      { item: 'Standard shapes', value: 'Pall ring, Raschig ring, cascade mini ring and IMTP-type saddle are covered on their own pages' },
    ],
    materials: ['SS304', 'SS316L', 'Carbon steel', 'Copper', 'Other alloys on request'],
    applications: [
      'Revamps of refinery and petrochemical columns',
      'Gas treating and amine units',
      'Scrubbers where fouling is a risk',
      'Pilot plant and laboratory distillation',
      'Columns where pressure drop or bed height is the binding constraint',
    ],
    comparison:
      'Choice among these shapes is driven by what limits the column, not by which is newest. If the limit is pressure drop, a VSP or Tellerette type opens the bed up. If it is capacity in a refinery column, a Nutter type is designed for exactly that. If it is height in a small column, a Dixon or triangle spiral ring packs high efficiency into a short bed. And if nothing is limiting, a pall ring or CMR is cheaper and easier to source. Tell us the constraint and we will point at the shape rather than the other way round.',
    faqs: [
      {
        q: 'Do you supply these shapes or only the standard ones?',
        a: 'We supply them to order, in the alloy your medium requires. Because these are lower-volume shapes, lead time is normally longer than for pall rings, and we will confirm it against the drawing before you commit.',
      },
      {
        q: 'Can these be mixed with pall rings in one bed?',
        a: 'Not normally. Mixing shapes in a single bed usually gives worse performance than either alone, because the two stack differently and create uneven voidage. Layered beds are used deliberately, for example a coarse layer at the bottom to filter and distribute, but that is a designed arrangement, not a random mix.',
      },
      {
        q: 'What data do you need to recommend a shape?',
        a: 'Column diameter, vapour and liquid loads, operating pressure and temperature, required separation, and the constraint you are trying to fix. With those we can compare two or three shapes on capacity and pressure drop instead of guessing.',
      },
      {
        q: 'Are laboratory-size quantities available?',
        a: 'Yes. Dixon, Cannon and spiral forms are usually bought in kilogram quantities for pilot columns, and we supply them on the same basis as production orders.',
      },
    ],
  },
  {
    slug: 'plastic-random-packing',
    name: 'Plastic Random Packing Shapes',
    image: '/images/products/plastic-random-packing.webp',
    title: 'Plastic Random Packing | Hiflow, Lanpack, Q-Pack, Snowflake Rings',
    h1: 'Plastic Random Packing Shapes',
    metaDescription:
      'Plastic random packing in PP, PVDF and PTFE: Hiflow, Lanpack, Q-Pack, Snowflake, Beta, Pentagon, conjugated and flat rings for scrubbers and cooling towers.',
    targetKeyword: 'plastic random packing',
    category: 'random-packing',
    intro:
      'Plastic random packing covers the widest range of shapes in the catalogue, and the reason is economic: a shape can be moulded cheaply, so suppliers have spent decades inventing geometries that shift the balance between surface area, pressure drop and fouling resistance by a few percent each time. Understanding which lever each shape pulls is more useful than memorising names.',
    specs: [
      { item: 'Hiflow type', value: 'Open lattice ring; low pressure drop for high gas flow scrubbing duty' },
      { item: 'Lanpack type', value: 'Cylindrical lattice with high voidage; used in absorption and cooling towers' },
      { item: 'Q-Pack type', value: 'Ring with internal structure aimed at efficiency at moderate pressure drop' },
      { item: 'Snowflake type', value: 'Multi-lobed open shape; large surface with low bulk density for scrubbers' },
      { item: 'Beta and pentagon types', value: 'Ring variants with internal partitions for higher efficiency in a shallow bed' },
      { item: 'Conjugated and flat rings', value: 'Simple, cheap shapes for coarse duty and as support or hold-down layers' },
      { item: 'Hollow ball and igel types', value: 'Very open spheres for degassing, oil-water separation and cooling tower duty' },
      { item: 'Materials', value: 'PP standard; PVDF for higher temperature and oxidising media; PTFE where nothing else survives' },
    ],
    materials: ['PP', 'PVDF', 'PTFE', 'HDPE on request'],
    applications: [
      'Flue gas and odour scrubbers',
      'Cooling towers and gas washing',
      'Absorption and stripping of acid gases',
      'Oil-water separation and degassing',
      'Biological and chemical effluent treatment',
      'Degreasing and fume hood packing',
    ],
    comparison:
      'More open shapes such as Hiflow, snowflake and hollow balls trade surface area for pressure drop and fouling resistance, so they suit high-flow, dirty duty where a fine ring would blind. Compact shapes with internal structure trade the other way and suit absorption columns where efficiency per metre is what costs money. The material question sits above all of this: PP covers most neutral and mildly acidic duty up to moderate temperature, PVDF takes hotter and more oxidising streams, and PTFE is for the cases where even PVDF fails.',
    faqs: [
      {
        q: 'Which plastic shape should I start with?',
        a: 'For a scrubber with high gas flow and fouling risk, start with an open shape such as a Hiflow or snowflake type. For an absorption column where you are paying for height, start with a structured or internally partitioned ring. We will compare two options on pressure drop and efficiency for your duty.',
      },
      {
        q: 'PP or PVDF?',
        a: 'PP is cheaper and adequate for most scrubbing duty. PVDF is specified where temperature is higher or the stream is oxidising enough to embrittle PP. Above the practical limit of PVDF, PTFE is the remaining option.',
      },
      {
        q: 'Do these shapes have the same nominal sizes?',
        a: 'Roughly, but not identically, and the naming is not standardised across suppliers. Send us the shape name and the duty data rather than the size alone, and we will confirm what we are actually supplying.',
      },
      {
        q: 'Can plastic packing be used in a packed tower with high temperature gas?',
        a: 'Only within the material limit. Above it, PP softens and loses its shape, which collapses the bed and destroys performance. Where the inlet is hot, the design usually needs a pre-quench or a ceramic layer at the bottom.',
      },
    ],
  },
];
