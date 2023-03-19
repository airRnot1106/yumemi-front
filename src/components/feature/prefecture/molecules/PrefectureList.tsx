'use client';

import { Suspense, useMemo } from 'react';

import { useAtomValue } from 'jotai';

import { PrefectureCheckbox } from '@/components/feature/prefecture/atoms/PrefectureCheckbox';
import styles from '@/components/feature/prefecture/molecules/PrefectureList.module.scss';

import { prefecturesState } from '@/stores/prefecture/selectors';
import type { Prefecture } from '@/stores/prefecture/types';

export type PrefectureListPresenterProps = {
  prefectures: Prefecture[];
};

export const PrefectureListPresenter = ({
  prefectures,
}: PrefectureListPresenterProps) => {
  return (
    <ul className={styles['module']}>
      {prefectures.map((prefecture) => (
        <li key={prefecture.prefCode} className={styles['list']}>
          <PrefectureCheckbox prefecture={prefecture} />
        </li>
      ))}
    </ul>
  );
};

export const PrefectureList = () => {
  const prefecturesResult = useAtomValue(useMemo(() => prefecturesState, []));

  if (prefecturesResult.ok) {
    const prefectures = Object.values(prefecturesResult.value);
    return (
      <Suspense
        fallback={
          <div>
            <p>loading...</p>
          </div>
        }
      >
        <PrefectureListPresenter prefectures={prefectures} />
      </Suspense>
    );
  } else {
    return (
      <div>
        <p>都道府県一覧の取得に失敗しました。</p>
      </div>
    );
  }
};
