// 场景页数据（10 个，排名主力，差异化主战场）
// 每页 ≥1200 词英文，含工况痛点→选型逻辑→推荐型号→失效模式→FAQ

export interface Application {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  targetKeyword: string;
  painPoint: string;
  environment: string;
  selectionLogic: string;
  recommended: { product: string; why: string }[];
  failureModes: string[];
  faqs: { q: string; a: string }[];
  relatedProducts: string[];
}

export const APPLICATIONS: Application[] = [
  {
    slug: 'flue-gas-desulfurization',
    title: 'Packing for Flue Gas Desulfurization (FGD) Scrubbers',
    h1: 'Packing for Flue Gas Desulfurization (FGD)',
    metaDescription:
      'Packing for FGD scrubbers: corrosion-resistant random and structured packing for SO₂ removal in wet flue gas desulfurization. Factory-direct supply.',
    targetKeyword: 'packing for flue gas desulfurization',
    painPoint:
      'FGD scrubbers contact hot, corrosive flue gas carrying SO₂, SO₃, chlorides and fly ash with an alkaline slurry. Packing must resist acid attack, resist fouling from gypsum and fly ash, and maintain low pressure drop so the induced-draft fan energy stays low. A wrong material choice leads to rapid corrosion, plugging, or excessive energy cost.',
    environment:
      'Saturated acidic slurry, chlorides present, abrasive fly ash, temperatures typically 50–70°C, slurry with gypsum and limestone particles.',
    selectionLogic:
      'Corrosion resistance is the first filter: PP or PVDF for the wet zone, with PVDF preferred where chlorides or higher temperature exist. Open geometry resists plugging by gypsum and fly ash, so large-surface, high-void packing is preferred. Pressure drop must stay low to limit fan power. The efficiency–capacity–pressure-drop triangle favours larger nominal sizes with generous void fraction.',
    recommended: [
      {
        product: 'Plastic Pall Ring (PP/PVDF)',
        why: 'Open geometry resists plugging; PP or PVDF resists the acidic, chloride-bearing slurry.',
      },
      {
        product: 'Tri-Pack',
        why: 'High drip points and void fraction give good gas-liquid contact without trapping solids.',
      },
      {
        product: 'Vane Mist Eliminator',
        why: 'Downstream demisting removes entrained slurry droplets without plugging, unlike mesh pads.',
      },
    ],
    failureModes: [
      'PP used where chlorides or temperature exceed its limit — leads to embrittlement and collapse.',
      'Mesh demisters plugging with gypsum and fly ash, raising pressure drop and flooding.',
      'Fine packing (small nominal size) trapping slurry solids and blinding the bed.',
      'Underestimated liquid load causing channeling and poor SO₂ removal.',
    ],
    faqs: [
      {
        q: 'Which material is best for FGD packing?',
        a: 'PP for the standard wet zone, PVDF where chlorides are significant or temperature is higher. Metal is rarely used in the wet FGD zone due to acid attack.',
      },
      {
        q: 'How do I prevent gypsum from plugging the packing?',
        a: 'Choose open, high-void geometry with a larger nominal size, ensure adequate liquid irrigation, and avoid dead zones. Tri-Pack and large pall rings resist solids accumulation.',
      },
      {
        q: 'What pressure drop should I design for?',
        a: 'Keep packing pressure drop low to control fan energy. We size packing to your gas rate to stay within your pressure budget.',
      },
      {
        q: 'Should the demister be mesh or vane type?',
        a: 'Vane type. Mesh pads plug rapidly with gypsum and fly ash; vanes tolerate solids and can be washed.',
      },
      {
        q: 'Can I retrofit existing FGD packing?',
        a: 'Yes, we supply replacement packing matched to your tower dimensions and can advise on upgrading to higher-void geometry.',
      },
    ],
    relatedProducts: ['pall-ring-plastic', 'tri-pack', 'vane-type', 'wire-mesh-pad'],
  },
  {
    slug: 'biogas-upgrading',
    title: 'Structured Packing for Biogas Upgrading (H₂S / CO₂ Removal)',
    h1: 'Structured Packing for Biogas Upgrading',
    metaDescription:
      'Structured packing for biogas upgrading: efficient H₂S and CO₂ removal for biomethane production. Factory-direct supply from China.',
    targetKeyword: 'structured packing for biogas upgrading',
    painPoint:
      'Biogas upgrading strips H₂S and CO₂ to produce pipeline-quality biomethane. The absorber must achieve high separation efficiency in a compact column while resisting H₂S corrosion, and the packing must be robust against foaming and biological fouling from the digester gas.',
    environment:
      'Wet biogas with H₂S and CO₂, amine or water-wash solvents, moderate temperature, potential foaming and biological fouling.',
    selectionLogic:
      'Structured packing wins here because biogas plants value compact, efficient columns and low pressure drop. Corrugated sheet metal packing in SS316L resists H₂S; wire mesh gives maximum efficiency for the cleanest gas. Plastic structured packing suits small water-scrubber units. Surface area of 250–350 m²/m³ is the sweet spot.',
    recommended: [
      {
        product: 'Corrugated Sheet Metal Packing (SS316L)',
        why: 'High efficiency, low pressure drop and H₂S resistance in a compact column.',
      },
      {
        product: 'Wire Mesh Structured Packing',
        why: 'Maximum efficiency for high-purity biomethane where gas is clean.',
      },
      {
        product: 'Plastic Structured Packing (PP/PVDF)',
        why: 'Corrosion-resistant, lightweight option for water-wash scrubbers.',
      },
    ],
    failureModes: [
      'SS304 packing corroding under H₂S — always specify SS316L or duplex.',
      'Foaming reducing mass transfer and causing carryover.',
      'Biological fouling blinding fine wire mesh.',
      'Undersized surface area limiting CO₂ removal to specification.',
    ],
    faqs: [
      {
        q: 'Why structured packing for biogas upgrading?',
        a: 'It delivers high efficiency in a compact column with low pressure drop, which biogas plants need for both performance and operating cost.',
      },
      {
        q: 'Which stainless steel resists H₂S?',
        a: 'SS316L or duplex. SS304 is not adequate for wet H₂S service.',
      },
      {
        q: 'What surface area should I specify?',
        a: '250–350 m²/m³ is typical. We size it against your gas rate and target CO₂ removal.',
      },
      {
        q: 'How do I handle foaming?',
        a: 'Structured packing is more foam-tolerant than random packing. Anti-foam measures and adequate disengagement space also help.',
      },
      {
        q: 'Is plastic structured packing suitable?',
        a: 'Yes for water-wash scrubbers at moderate temperature, but confirm chemical compatibility with your solvent.',
      },
    ],
    relatedProducts: ['corrugated-sheet', 'wire-mesh', 'plastic-structured'],
  },
  {
    slug: 'amine-sweetening',
    title: 'Amine Scrubber Internals | Packing & Distributors',
    h1: 'Amine Scrubber Internals',
    metaDescription:
      'Amine scrubber packing and internals for gas sweetening (H₂S/CO₂ removal). Corrosion-resistant structured packing and liquid distributors.',
    targetKeyword: 'amine scrubber packing',
    painPoint:
      'Amine units remove H₂S and CO₂ from natural gas and refinery streams. The rich-amine environment is corrosive and prone to foaming; poor liquid distribution wastes solvent and energy, while corrosion shortens packing life. Packing and distributors must work together for reliable, efficient sweetening.',
    environment:
      'Aqueous amine solvents (MEA, DEA, MDEA), wet acid gas, moderate temperature, foaming tendency, corrosion in rich-amine service.',
    selectionLogic:
      'Corrosion resistance and uniform liquid distribution dominate. Corrugated sheet packing in SS316L or duplex resists rich-amine corrosion. An efficient liquid distributor is essential to realise packing performance. Surface area 250–350 m²/m³ balances efficiency and capacity.',
    recommended: [
      {
        product: 'Corrugated Sheet Metal Packing',
        why: 'Efficient, corrosion-resistant, and compatible with good liquid distributors.',
      },
      {
        product: 'Tower Internals (Liquid Distributors)',
        why: 'Uniform distribution is essential for amine absorber efficiency.',
      },
      {
        product: 'Wire Mesh Demister Pad',
        why: 'Captures amine carryover and protects downstream equipment.',
      },
    ],
    failureModes: [
      'Poor liquid distribution causing channelling and reduced sweetening efficiency.',
      'Carbon steel or SS304 corroding in rich-amine service.',
      'Foaming carrying amine overhead.',
      'Undersized packing flooding at design gas rates.',
    ],
    faqs: [
      {
        q: 'What material resists rich-amine corrosion?',
        a: 'SS316L or duplex stainless. Carbon steel and SS304 corrode in rich-amine service.',
      },
      {
        q: 'Why are liquid distributors important in amine units?',
        a: 'Amine absorbers need very uniform liquid distribution to achieve the design H₂S/CO₂ removal; poor distribution causes channelling.',
      },
      {
        q: 'What surface area is best for amine packing?',
        a: '250–350 m²/m³ typically. We size it against solvent type and gas rate.',
      },
      {
        q: 'How do I control foaming?',
        a: 'Proper solvent filtration, temperature control and adequate anti-foam dosing, plus structured packing which is more foam-tolerant.',
      },
      {
        q: 'Do you supply complete amine tower internals?',
        a: 'Yes, packing, distributors, redistributors, support plates and demisters as a matched set.',
      },
    ],
    relatedProducts: ['corrugated-sheet', 'wire-mesh-pad', 'wire-mesh'],
  },
  {
    slug: 'hydrogen-peroxide-adsorbent',
    title: 'Activated Alumina for Hydrogen Peroxide Working Solution Recovery',
    h1: 'Activated Alumina for H₂O₂ Working Solution Recovery',
    metaDescription:
      'Activated alumina adsorbent for anthraquinone-process hydrogen peroxide working solution recovery. High purity, regenerable. Factory-direct.',
    targetKeyword: 'activated alumina hydrogen peroxide',
    painPoint:
      'In the anthraquinone process for hydrogen peroxide, the working solution must be kept free of degradation products and water to protect the catalyst and maintain yield. Activated alumina regenerates the working solution by adsorbing degradation products, and drying it preserves process efficiency. Purity and crush strength matter because fines contaminate the loop.',
    environment:
      'Organic working solution (anthraquinone in aromatic solvent), trace water, degradation products, moderate temperature, regeneration cycles.',
    selectionLogic:
      'Specify high-purity, high-surface-area activated alumina with low fines and good crush strength. Regenerability matters for operating cost. Pore structure is tuned to adsorb the specific degradation products while withstanding thermal regeneration.',
    recommended: [
      {
        product: 'Activated Alumina Adsorbent',
        why: 'Regenerates working solution and removes water; high purity protects the catalyst.',
      },
    ],
    failureModes: [
      'Low crush strength generating fines that contaminate the working solution.',
      'Impure alumina poisoning the catalyst.',
      'Incorrect pore size reducing adsorption capacity or making regeneration incomplete.',
      'Water breakthrough drying insufficiently, cutting H₂O₂ yield.',
    ],
    faqs: [
      {
        q: 'Why is activated alumina used in H₂O₂ production?',
        a: 'It adsorbs degradation products from the working solution and removes water, protecting the catalyst and maintaining yield.',
      },
      {
        q: 'How important is crush strength?',
        a: 'Critical. Low strength produces fines that contaminate the loop. We supply low-fines, high-strength grades.',
      },
      {
        q: 'Is the alumina regenerable?',
        a: 'Yes, it is thermally regenerated in place, which keeps operating cost low.',
      },
      {
        q: 'What purity do you supply?',
        a: 'High-purity grades suitable for catalyst protection; we confirm the specification against your process.',
      },
      {
        q: 'Do you provide replacement loading?',
        a: 'Yes, we supply replacement charges matched to your adsorption vessels.',
      },
    ],
    relatedProducts: [],
  },
  {
    slug: 'data-center-cooling',
    title: 'Evaporative Cooling Packing for Data Centers',
    h1: 'Evaporative Cooling Packing for Data Centers',
    metaDescription:
      'Evaporative cooling fill for data center cooling towers and adiabatic coolers. High efficiency, low fouling. Factory-direct supply.',
    targetKeyword: 'evaporative cooling fill data center',
    painPoint:
      'Data centers reject enormous heat loads and increasingly use evaporative or adiabatic cooling to cut energy and water use. Cooling fill must maximise heat rejection per unit volume, resist biological fouling and scale, and tolerate continuous operation. A poor fill raises approach temperature and fan energy.',
    environment:
      'Cooling water, biological fouling, scale, continuous high load, ambient temperature variation.',
    selectionLogic:
      'High-surface-area cooling fill maximises heat transfer. Anti-fouling geometry and materials that resist biofilm and scale keep long-term performance. For adiabatic (wet-dry) systems, specialised fill with low water retention reduces hysteresis.',
    recommended: [
      {
        product: 'Cooling Tower Fill (high surface area)',
        why: 'Maximises heat rejection per unit volume for compact data-center cooling.',
      },
      {
        product: 'Vane Mist Eliminator',
        why: 'Controls drift and water loss from induced-draft towers.',
      },
    ],
    failureModes: [
      'Biofilm and scale blinding the fill and cutting heat transfer.',
      'Low-quality fill sagging or collapsing under load.',
      'Excessive drift wasting water.',
      'Fill with poor wetting causing channeling.',
    ],
    faqs: [
      {
        q: 'Why use evaporative cooling for data centers?',
        a: 'It reduces compressor energy dramatically versus air-cooled systems, lowering both cost and carbon footprint.',
      },
      {
        q: 'How do I prevent biofilm in cooling fill?',
        a: 'Use anti-fouling geometry and compatible materials, maintain proper water treatment, and choose fill that resists biological growth.',
      },
      {
        q: 'What is adiabatic cooling?',
        a: 'Cooling air by evaporating water without a full cooling tower, often with wet-dry fill for lower water use.',
      },
      {
        q: 'Can the fill handle continuous 24/7 load?',
        a: 'Yes, industrial-grade fill is designed for continuous operation; we confirm material and thickness for your duty.',
      },
      {
        q: 'Do you supply drift eliminators?',
        a: 'Yes, vane mist eliminators reduce water loss and prevent biological dispersal.',
      },
    ],
    relatedProducts: ['vane-type', 'blade-type'],
  },
  {
    slug: 'co2-capture',
    title: 'Packing for CO₂ Capture | Solvent-Based Carbon Capture',
    h1: 'Packing for CO₂ Capture',
    metaDescription:
      'Structured packing for solvent-based CO₂ capture. High efficiency, low pressure drop for amine and carbonate capture systems.',
    targetKeyword: 'packing for co2 capture',
    painPoint:
      'Solvent-based CO₂ capture (amine or carbonate) needs absorbers with very high mass-transfer efficiency and low pressure drop, because the energy penalty is the dominant cost. The packing must resist the corrosive solvent, handle large gas flows, and support uniform distribution to hit capture rate targets.',
    environment:
      'Amine or carbonate solvent, wet CO₂-rich gas, corrosion, large volumetric flows, energy-sensitive operation.',
    selectionLogic:
      'Corrugated sheet structured packing in SS316L or duplex is the standard: high efficiency, low pressure drop, good fouling tolerance. Wire mesh is used for maximum efficiency where gas is clean. 250–350 m²/m³ balances capture efficiency against column size.',
    recommended: [
      {
        product: 'Corrugated Sheet Metal Packing (SS316L)',
        why: 'The industry standard for CO₂ absorbers: efficient, low pressure drop, corrosion-resistant.',
      },
      {
        product: 'Wire Mesh Structured Packing',
        why: 'Maximum efficiency for high capture-rate targets with clean gas.',
      },
    ],
    failureModes: [
      'Corrosion of packing in rich-solvent service.',
      'Underestimating pressure drop, raising regeneration energy.',
      'Poor distribution limiting capture efficiency.',
      'Foaming in amine systems causing carryover.',
    ],
    faqs: [
      {
        q: 'What packing is used for CO₂ capture?',
        a: 'Corrugated sheet structured packing in SS316L or duplex is the standard, with wire mesh for the highest efficiency.',
      },
      {
        q: 'Why is pressure drop so important in CO₂ capture?',
        a: 'The energy penalty dominates cost, and pressure drop directly raises it. Structured packing minimises this.',
      },
      {
        q: 'Which material resists the solvent?',
        a: 'SS316L or duplex stainless. Confirm with your solvent chemistry.',
      },
      {
        q: 'What surface area should I choose?',
        a: '250–350 m²/m³ typically. We size it against gas rate and capture target.',
      },
      {
        q: 'Can structured packing handle large gas flows?',
        a: 'Yes, structured packing is preferred for high-capacity CO₂ absorbers precisely because of its high capacity per unit volume.',
      },
    ],
    relatedProducts: ['corrugated-sheet', 'wire-mesh'],
  },
  {
    slug: 'mud-gas-separator',
    title: 'Mud Gas Separator Internals | Separator Packing',
    h1: 'Mud Gas Separator Internals',
    metaDescription:
      'Mud gas separator internals and packing for drilling fluid degassing. Robust, erosion-resistant designs. Factory-direct supply.',
    targetKeyword: 'mud gas separator internals',
    painPoint:
      'Mud gas separators remove gas from drilling fluid under harsh, abrasive, and often pressurised conditions. Internals must resist erosion from solids-laden drilling mud, handle gas surges, and separate gas reliably to protect downstream equipment and personnel.',
    environment:
      'Drilling mud with solids, gas surges, abrasive conditions, potential high pressure, corrosion from formation fluids.',
    selectionLogic:
      'Robustness and erosion resistance dominate. Internals are typically plate-type or specially reinforced random packing that resists the abrasive, solids-laden flow. Large open geometry avoids plugging. Materials resist both abrasion and formation-fluid corrosion.',
    recommended: [
      {
        product: 'Tower Internals (separator internals)',
        why: 'Custom plate and baffle designs that resist erosion and gas surges.',
      },
      {
        product: 'Large-Nominal Random Packing',
        why: 'Open, robust geometry that avoids plugging in solids-laden mud.',
      },
    ],
    failureModes: [
      'Fine packing plugging with drilling solids.',
      'Erosion of internals from abrasive mud.',
      'Inadequate gas surge capacity causing carryover.',
      'Corrosion from formation fluids.',
    ],
    faqs: [
      {
        q: 'What is a mud gas separator?',
        a: 'A vessel that removes gas from drilling fluid, typically using baffles or packing to separate gas from the mud.',
      },
      {
        q: 'Why is erosion resistance important?',
        a: 'Drilling mud carries abrasive solids that wear internals quickly; robust geometry and materials extend service life.',
      },
      {
        q: 'What geometry resists plugging?',
        a: 'Large, open geometry such as plate baffles or large-nominal packing avoids trapping solids.',
      },
      {
        q: 'Can internals handle gas surges?',
        a: 'Yes, designs are sized for surge capacity to prevent carryover.',
      },
      {
        q: 'Do you provide custom designs?',
        a: 'Yes, we design and supply internals matched to your separator dimensions and flow conditions.',
      },
    ],
    relatedProducts: [],
  },
  {
    slug: 'ammonia-stripping',
    title: 'Packing for Ammonia Stripping | Wastewater Treatment',
    h1: 'Packing for Ammonia Stripping',
    metaDescription:
      'Packing for ammonia stripping towers in wastewater treatment. High-efficiency mass transfer for nitrogen removal. Factory-direct.',
    targetKeyword: 'ammonia stripping',
    painPoint:
      'Ammonia stripping removes ammonia from wastewater by air or steam stripping at elevated pH. The packing must deliver high mass-transfer efficiency to hit discharge limits, resist scaling from hard water, and tolerate the alkaline, potentially fouling environment.',
    environment:
      'High-pH wastewater, lime scaling, moderate temperature, air or steam stripping.',
    selectionLogic:
      'Efficiency and fouling tolerance drive the choice. Large-surface structured or random packing maximises ammonia transfer, while open geometry resists scaling. Materials resist the alkaline environment; plastic and stainless both feature.',
    recommended: [
      {
        product: 'Plastic Pall Ring (PP)',
        why: 'Corrosion-resistant, cost-effective, open geometry resists scaling.',
      },
      {
        product: 'Plastic Structured Packing',
        why: 'High efficiency for compact stripping towers.',
      },
    ],
    failureModes: [
      'Lime scaling blinding the packing.',
      'Undersized packing failing to meet discharge limits.',
      'Channeling from poor distribution.',
      'Plastic softening at elevated stripping temperature.',
    ],
    faqs: [
      {
        q: 'How does ammonia stripping work?',
        a: 'Raising pH converts ammonium to free ammonia, which is stripped from the liquid by air or steam across the packing.',
      },
      {
        q: 'Which packing resists lime scaling?',
        a: 'Open geometry such as large plastic pall rings resists scaling; structured packing offers higher efficiency.',
      },
      {
        q: 'What material should I use?',
        a: 'PP is standard for its corrosion resistance and cost; confirm temperature limits for steam stripping.',
      },
      {
        q: 'How do I meet discharge limits?',
        a: 'Adequate surface area and uniform distribution. We size the packing against your influent ammonia and target effluent.',
      },
      {
        q: 'Can I retrofit an existing tower?',
        a: 'Yes, we supply replacement packing matched to your tower.',
      },
    ],
    relatedProducts: ['pall-ring-plastic', 'plastic-structured', 'tri-pack'],
  },
  {
    slug: 'waste-incineration-flue-gas',
    title: 'Packing for Waste Incineration Flue Gas Treatment',
    h1: 'Packing for Waste Incineration Flue Gas',
    metaDescription:
      'Packing for waste incineration flue gas cleaning: acid-gas and dioxin control. Corrosion-resistant scrubber packing.',
    targetKeyword: 'waste incineration flue gas',
    painPoint:
      'Waste incineration flue gas carries HCl, SO₂, heavy metals and dioxins. The cleaning train (quench, scrubber, absorber) needs packing that resists strong acid and high temperature, tolerates particulate, and supports high removal efficiency to meet tight emission limits.',
    environment:
      'Hot acidic gas (HCl, SO₂), high temperature in quench zone, particulate, aggressive condensate.',
    selectionLogic:
      'Corrosion and temperature resistance dominate. Ceramic packing for the hot quench zone; PVDF or PTFE for the acidic scrubber. Open geometry tolerates particulate. Material selection must survive acid condensate.',
    recommended: [
      {
        product: 'Ceramic Pall Ring',
        why: 'Resists high temperature and acid in the quench and first-stage scrubber.',
      },
      {
        product: 'Plastic Pall Ring (PVDF/PTFE)',
        why: 'Chemical resistance for the acidic absorption stage.',
      },
      {
        product: 'Vane Mist Eliminator',
        why: 'Removes acid mist and particulate-laden droplets downstream.',
      },
    ],
    failureModes: [
      'PP packing failing at quench-zone temperature.',
      'Ceramic cracking from thermal shock.',
      'Particulate plugging fine packing.',
      'Acid condensate corroding metal internals.',
    ],
    faqs: [
      {
        q: 'Which packing for the hot quench zone?',
        a: 'Ceramic packing, which withstands high temperature and acid.',
      },
      {
        q: 'Which plastic resists HCl scrubber conditions?',
        a: 'PVDF or PTFE. PP is inadequate for hot, concentrated HCl.',
      },
      {
        q: 'How do I handle particulate?',
        a: 'Use open geometry with larger nominal size and ensure adequate liquid irrigation.',
      },
      {
        q: 'Does ceramic resist thermal shock?',
        a: 'It can crack under rapid temperature change; we advise on grade and operation to minimise shock.',
      },
      {
        q: 'Do you supply the full cleaning train?',
        a: 'We supply packing and internals for quench, scrubber and absorber stages.',
      },
    ],
    relatedProducts: ['pall-ring-ceramic', 'pall-ring-plastic', 'vane-type'],
  },
  {
    slug: 'vacuum-deaeration',
    title: 'Packing for Vacuum Deaeration | Feedwater Deoxygenation',
    h1: 'Packing for Vacuum Deaeration',
    metaDescription:
      'Packing for vacuum deaerators in power and feedwater treatment. Efficient oxygen removal with low pressure drop.',
    targetKeyword: 'vacuum deaeration',
    painPoint:
      'Vacuum deaerators remove dissolved oxygen from boiler feedwater to prevent corrosion. The packing must provide efficient gas-liquid contact to strip oxygen to low levels while operating under vacuum, where pressure drop is especially critical.',
    environment:
      'Feedwater at vacuum, low dissolved oxygen targets, low pressure drop requirement, moderate temperature.',
    selectionLogic:
      'Low pressure drop is paramount under vacuum. High-surface-area packing maximises oxygen stripping efficiency. Corrosion-resistant materials (stainless or plastic) protect the high-purity water.',
    recommended: [
      {
        product: 'Plastic Pall Ring (PP)',
        why: 'Lightweight, corrosion-resistant, and provides good mass transfer at low pressure drop.',
      },
      {
        product: 'Corrugated Sheet Metal Packing (SS316L)',
        why: 'High efficiency and low pressure drop for larger deaerators.',
      },
    ],
    failureModes: [
      'High pressure drop limiting vacuum achievable.',
      'Insufficient surface area failing to meet oxygen spec.',
      'Corrosion products contaminating feedwater.',
      'Channeling from poor distribution.',
    ],
    faqs: [
      {
        q: 'Why is pressure drop critical in vacuum deaeration?',
        a: 'Under vacuum, any pressure drop directly limits the achievable vacuum level, so low-pressure-drop packing is essential.',
      },
      {
        q: 'What oxygen level can vacuum deaeration achieve?',
        a: 'Typically below 20 ppb dissolved oxygen with proper packing and operation.',
      },
      {
        q: 'Which material protects feedwater purity?',
        a: 'Stainless steel or plastic, which do not shed corrosion products into the water.',
      },
      {
        q: 'What surface area do I need?',
        a: 'We size it against your flow rate and target oxygen level.',
      },
      {
        q: 'Can I retrofit my deaerator?',
        a: 'Yes, we supply replacement packing matched to your vessel.',
      },
    ],
    relatedProducts: ['pall-ring-plastic', 'corrugated-sheet'],
  },
];
