import styles from '@/components/feature/load/atoms/LoadIcon.module.scss';

export const LoadIconPresenter = () => {
  return (
    <div className={styles['module']}>
      <div className={styles['icon']} />
    </div>
  );
};

// ローディングアイコン
export const LoadIcon = () => {
  return <LoadIconPresenter />;
};
