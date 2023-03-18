import type { ChangeEvent } from 'react';

import styles from '@/components/base/atoms/Checkbox.module.scss';

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <div>
      <label className={styles['label']}>
        <input
          type="checkbox"
          className={styles['checkbox']}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};
