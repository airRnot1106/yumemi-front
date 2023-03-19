import styles from '@/components/feature/prefecture/molecules/PrefectureCard.module.scss';
import { PrefectureList } from '@/components/feature/prefecture/molecules/PrefectureList';

export const PrefectureCardPresenter = () => {
  return (
    <div className={styles['module']}>
      <PrefectureList />
    </div>
  );
};

export const PrefectureCard = () => {
  return <PrefectureCardPresenter />;
};
