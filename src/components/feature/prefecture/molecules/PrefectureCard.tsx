import { Suspense } from 'react';

import { LoadIcon } from '@/components/feature/load/atoms/LoadIcon';
import styles from '@/components/feature/prefecture/molecules/PrefectureCard.module.scss';
import { PrefectureList } from '@/components/feature/prefecture/molecules/PrefectureList';

export const PrefectureCardPresenter = () => {
  return (
    <div className={styles['module']}>
      <Suspense fallback={<LoadIcon />}>
        <PrefectureList />
      </Suspense>
    </div>
  );
};

export const PrefectureCard = () => {
  return <PrefectureCardPresenter />;
};
