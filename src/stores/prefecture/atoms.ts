import { atom } from 'jotai';

import type { CheckedPrefecturesAtom } from '@/stores/prefecture/types';

// checkboxで選択された都道府県のコードを管理するatom
export const checkedPrefecturesAtom = atom<CheckedPrefecturesAtom>([1]);
checkedPrefecturesAtom.debugLabel = 'checkedPrefecturesAtom';
