import type { ChangeEvent } from 'react';
import { useMemo } from 'react';

import { useAtomValue, useSetAtom } from 'jotai';

import type { CheckboxProps } from '@/components/base/atoms/Checkbox';
import { Checkbox } from '@/components/base/atoms/Checkbox';

import {
  addCheckedPrefectureAtom,
  removeCheckedPrefectureAtom,
} from '@/stores/prefecture/operations';
import { checkedPrefecturesState } from '@/stores/prefecture/selectors';
import type { Prefecture } from '@/stores/prefecture/types';

export type PrefectureCheckboxPresenterProps = CheckboxProps;

export const PrefectureCheckboxPresenter = ({
  label,
  checked,
  onChange,
}: PrefectureCheckboxPresenterProps) => {
  return <Checkbox label={label} checked={checked} onChange={onChange} />;
};

export type PrefectureCheckboxProps = {
  prefecture: Prefecture;
};

// 都道府県チェックボックス
export const PrefectureCheckbox = ({ prefecture }: PrefectureCheckboxProps) => {
  const { prefCode, prefName } = prefecture;

  // チェックボックスのラベル
  const label = prefName;

  // チェックされている都道府県の一覧
  const checkedPrefectures = useAtomValue(
    useMemo(() => checkedPrefecturesState, [])
  );
  const checked = checkedPrefectures.includes(prefCode);

  const addCheckedPrefecture = useSetAtom(
    useMemo(() => addCheckedPrefectureAtom, [])
  );
  const removeCheckedPrefecture = useSetAtom(
    useMemo(() => removeCheckedPrefectureAtom, [])
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      addCheckedPrefecture(prefCode);
    } else {
      removeCheckedPrefecture(prefCode);
    }
  };

  return (
    <PrefectureCheckboxPresenter
      label={label}
      checked={checked}
      onChange={handleChange}
    />
  );
};
