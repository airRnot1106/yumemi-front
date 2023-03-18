import { atom } from 'jotai';

import { checkedPrefecturesAtom } from '@/stores/prefecture/atoms';
import type { PrefectureCode } from '@/stores/prefecture/types';

// 都道府県を選択状態にするatom
export const addCheckedPrefectureAtom = atom(
  null,
  (get, set, prefCode: PrefectureCode) => {
    const checkedPrefectures = get(checkedPrefecturesAtom);
    set(checkedPrefecturesAtom, [...checkedPrefectures, prefCode]);
  }
);

// 都道府県の選択状態を解除するatom
export const removeCheckedPrefectureAtom = atom(
  null,
  (get, set, prefCode: PrefectureCode) => {
    const checkedPrefectures = get(checkedPrefecturesAtom);
    set(
      checkedPrefecturesAtom,
      checkedPrefectures.filter(
        (checkedPrefecture) => checkedPrefecture !== prefCode
      )
    );
  }
);
