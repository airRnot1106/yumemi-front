'use client';

import { useMemo } from 'react';

import { useAtomValue, useSetAtom } from 'jotai';

import type { TabProps } from '@/components/base/molecules/Tab';
import { Tab } from '@/components/base/molecules/Tab';

import { selectedPopulationTypeAtom } from '@/stores/population/atoms';
import { changeSelectedPopulationTypeAtom } from '@/stores/population/operations';
import type { PopulationType } from '@/stores/population/types';
import {
  populationTypes,
  populationTypeToLabel,
} from '@/stores/population/types';

export type PopulationTabPresenterProps = TabProps;

export const PopulationTabPresenter = ({
  items,
  activeValue,
  onClick,
}: PopulationTabPresenterProps) => {
  return <Tab items={items} activeValue={activeValue} onClick={onClick} />;
};

export const PopulationTab = () => {
  const items = populationTypes.map((type) => ({
    label: populationTypeToLabel[type],
    value: type,
  }));

  // 選択されている人口情報
  const activeValue = useAtomValue(
    useMemo(() => selectedPopulationTypeAtom, [])
  );

  const changeSelectedPopulationType = useSetAtom(
    useMemo(() => changeSelectedPopulationTypeAtom, [])
  );

  const handleClick = (value: string) => {
    changeSelectedPopulationType(value as PopulationType);
  };

  return (
    <PopulationTabPresenter
      items={items}
      activeValue={activeValue}
      onClick={handleClick}
    />
  );
};
