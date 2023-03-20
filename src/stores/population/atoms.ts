import { atom } from 'jotai';

import type { SelectedPopulationTypeAtom } from '@/stores/population/types';

// 選択された人口情報の種類を管理するatom
export const selectedPopulationTypeAtom =
  atom<SelectedPopulationTypeAtom>('TOTAL');
selectedPopulationTypeAtom.debugLabel = 'selectedPopulationTypeAtom';
