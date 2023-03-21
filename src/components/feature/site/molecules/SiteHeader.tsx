import styles from '@/components/feature/site/molecules/SiteHeader.module.scss';

export type SiteHeaderPresenterProps = {
  title: string;
};

export const SiteHeaderPresenter = ({ title }: SiteHeaderPresenterProps) => {
  return (
    <header className={styles['module']}>
      <div>
        <h1 className={styles['title']}>{title}</h1>
      </div>
    </header>
  );
};

// Header
export const SiteHeader = () => {
  return <SiteHeaderPresenter title="Yumemi-Front" />;
};
