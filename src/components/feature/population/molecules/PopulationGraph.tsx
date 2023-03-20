'use client';

import { useMemo } from 'react';

import { useAtomValue } from 'jotai';

import type { GraphProps } from '@/components/base/molecules/Graph';
import { Graph } from '@/components/base/molecules/Graph';

import {
  populationsArrayState,
  populationYearsState,
  selectedPopulationTypeState,
} from '@/stores/population/selectors';
import { populationTypeToLabel } from '@/stores/population/types';
import { checkedPrefecturesState } from '@/stores/prefecture/selectors';

export type PopulationGraphPresenterProps = GraphProps;

export const PopulationGraphPresenter = ({
  title,
  xAxis,
  yAxis,
  series,
}: PopulationGraphPresenterProps) => {
  return <Graph title={title} xAxis={xAxis} yAxis={yAxis} series={series} />;
};

export const PopulationGraph = () => {
  // 選択されている都道府県の一覧
  const checkedPrefectures = useAtomValue(
    useMemo(() => checkedPrefecturesState, [])
  );

  // 選択されている人口情報
  const selectedPopulationType = useAtomValue(
    useMemo(() => selectedPopulationTypeState, [])
  );

  // 選択されている人口情報のラベル
  const selectedPopulationTypeLabel =
    populationTypeToLabel[selectedPopulationType];

  // 人口構成の年一覧のデータ
  const populationYears = useAtomValue(useMemo(() => populationYearsState, []));

  // 人口構成データの一覧
  const populationsArray = useAtomValue(
    useMemo(
      () => populationsArrayState(checkedPrefectures),
      [checkedPrefectures]
    )
  );

  // 有効な人口構成データの一覧
  const validPopulationsArray = populationsArray.flatMap((populations) =>
    populations.ok ? [populations.value] : []
  );

  if (!populationYears.ok) {
    return (
      <div>
        <p>人口構成の年一覧の取得に失敗しました。</p>
      </div>
    );
  }

  const xAxis: GraphProps['xAxis'] = {
    title: '年度',
    categories: populationYears.value.map((year) => `${year}`) ?? [],
  };

  const yAxis: GraphProps['yAxis'] = {
    title: '人口数',
  };

  const series: GraphProps['series'] = validPopulationsArray.map(
    (populations) => ({
      name: populations.prefecture.prefName,
      data: populations.data.get(selectedPopulationType) ?? [],
    })
  );

  return (
    <PopulationGraphPresenter
      title={selectedPopulationTypeLabel}
      xAxis={xAxis}
      yAxis={yAxis}
      series={series}
    />
  );
};