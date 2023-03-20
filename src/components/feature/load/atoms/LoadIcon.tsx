import styles from '@/components/feature/load/atoms/LoadIcon.module.scss';

export const LoadIconPresenter = () => {
  return (
    <div className={styles['module']}>
      <div className={styles['icon']} />
    </div>
  );
};

export const LoadIcon = () => {
  return <LoadIconPresenter />;
};
