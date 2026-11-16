import type { Product } from './products';
import { CERAMIC_BALLS } from './ceramicBalls';
import { ADSORBENTS } from './adsorbents';
import { FILTER_MEDIA } from './filterMedia';

// 新增品类产品合集（瓷球 / 吸附剂 / 滤料）
export const CATALOG: Product[] = [...CERAMIC_BALLS, ...ADSORBENTS, ...FILTER_MEDIA];

export const itemsOf = (category: string) => CATALOG.filter((p) => p.category === category);

export const findItem = (category: string, slug: string) =>
  CATALOG.find((p) => p.category === category && p.slug === slug);
