import styles from '@/components/feature/site/molecules/SiteFooter.module.scss';

export type SiteFooterPresenterProps = {
  content: string;
};

export const SiteFooterPresenter = ({ content }: SiteFooterPresenterProps) => {
  return (
    <footer className={styles['module']}>
      <div className={styles['content']}>{content}</div>
    </footer>
  );
};

export const SiteFooter = () => {
  return <SiteFooterPresenter content="@airRnot" />;
};
