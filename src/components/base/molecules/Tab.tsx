import styles from '@/components/base/molecules/Tab.module.scss';

export type TabProps = {
  items: {
    label: string;
    value: string;
  }[];
  activeValue: string;
  onClick: (value: string) => void;
};

export const Tab = ({ items, activeValue, onClick }: TabProps) => {
  return (
    <ul className={styles['module']}>
      {items.map(({ label, value }) => (
        <li
          key={value}
          className={styles['list'] + (activeValue === value ? ' active' : '')}
        >
          <button className={styles['button']} onClick={() => onClick(value)}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};
