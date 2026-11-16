// 材质库数据（Materials 页）
// 物性表：内链枢纽

export interface Material {
  name: string;
  fullName: string;
  maxTemp: string;
  density: string;
  corrosion: string;
  bestFor: string;
  avoid: string;
}

export const MATERIALS: Material[] = [
  {
    name: 'PP',
    fullName: 'Polypropylene',
    maxTemp: '100°C',
    density: '0.91 g/cm³',
    corrosion: 'Good — most acids, alkalis, salt solutions',
    bestFor: 'Acid scrubbers, water treatment, general low-temperature corrosive service',
    avoid: 'Strong oxidisers, aromatic hydrocarbons, hot chlorine, >100°C',
  },
  {
    name: 'PVDF',
    fullName: 'Polyvinylidene fluoride',
    maxTemp: '150°C',
    density: '1.78 g/cm³',
    corrosion: 'Excellent — strong acids, chlorides, halogens',
    bestFor: 'Chlorine/HCl service, higher-temperature acid scrubbers, high purity',
    avoid: 'Strong hot alkalis, some polar solvents',
  },
  {
    name: 'PTFE',
    fullName: 'Polytetrafluoroethylene',
    maxTemp: '260°C',
    density: '2.2 g/cm³',
    corrosion: 'Outstanding — virtually inert',
    bestFor: 'Most aggressive media, hot concentrated acids, high purity',
    avoid: 'Molten alkali metals, fluorine gas (limited)',
  },
  {
    name: 'SS304',
    fullName: 'Stainless Steel 304',
    maxTemp: '~400°C (mechanical)',
    density: '7.93 g/cm³',
    corrosion: 'Good — clean atmospheric and mild chemical',
    bestFor: 'Clean hydrocarbons, general distillation, non-chloride service',
    avoid: 'Chlorides, wet H₂S, hot acids',
  },
  {
    name: 'SS316 / 316L',
    fullName: 'Stainless Steel 316 / 316L',
    maxTemp: '~400°C (mechanical)',
    density: '8.0 g/cm³',
    corrosion: 'Very good — molybdenum resists chlorides and acid gas',
    bestFor: 'CO₂/H₂S service, amine units, marine, sour gas',
    avoid: 'Strong reducing acids, hot concentrated chlorides',
  },
  {
    name: 'Duplex',
    fullName: 'Duplex / Super-duplex stainless',
    maxTemp: '~300°C',
    density: '7.8 g/cm³',
    corrosion: 'Excellent — high chloride and stress-corrosion resistance',
    bestFor: 'High-chloride service, seawater, high stress',
    avoid: 'Strong reducing environments',
  },
  {
    name: 'Ceramic',
    fullName: 'Chemical porcelain / alumina ceramic',
    maxTemp: '>1000°C',
    density: '2.3–3.9 g/cm³',
    corrosion: 'Outstanding — acids and high temperature',
    bestFor: 'Hot acid manufacture, high-temperature gas scrubbing',
    avoid: 'HF and fluoride media, thermal shock, mechanical impact',
  },
  {
    name: 'Carbon',
    fullName: 'Carbon / graphite packing',
    maxTemp: 'High (non-oxidising)',
    density: '~1.5 g/cm³',
    corrosion: 'Excellent — HF, strong oxidising acids',
    bestFor: 'HF service, strong oxidisers that attack ceramic and metal',
    avoid: 'Strong oxidising atmospheres at high temperature',
  },
];
