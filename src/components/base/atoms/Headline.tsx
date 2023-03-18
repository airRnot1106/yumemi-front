import styles from '@/components/base/atoms/Headline.module.scss';

export type HeadlineProps = {
  text: string;
};

export const Headline = ({ text }: HeadlineProps) => {
  return (
    <div className={styles['module']}>
      <p className={styles['text']}>{text}</p>
    </div>
  );
};
