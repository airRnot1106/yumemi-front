import { Suspense } from 'react';

import { Headline } from '@/components/base/atoms/Headline';
import { LoadIcon } from '@/components/feature/load/atoms/LoadIcon';
import { PopulationGraph } from '@/components/feature/population/molecules/PopulationGraph';
import { PopulationTab } from '@/components/feature/population/molecules/PopulationTab';
import { PrefectureCard } from '@/components/feature/prefecture/molecules/PrefectureCard';
import styles from '@/components/page/index.module.scss';

export const IndexPresenter = () => {
  return (
    <main>
      <div>
        <div>
          <Headline text="都道府県" />
        </div>
        <PrefectureCard />
      </div>
      <div>
        <PopulationTab />
        <div className={styles['graph']}>
          <Suspense fallback={<LoadIcon />}>
            <PopulationGraph />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export const Index = () => {
  return <IndexPresenter />;
};
