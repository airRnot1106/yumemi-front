import { atom } from 'jotai';

import { selectedPopulationTypeAtom } from '@/stores/population/atoms';
import type { PopulationType } from '@/stores/population/types';

// 選択された人口情報の種類を変更するatom
export const changeSelectedPopulationTypeAtom = atom(
  null,
  (_get, set, type: PopulationType) => {
    set(selectedPopulationTypeAtom, type);
  }
);
