import { PrefectureCheckbox } from '@/components/feature/prefecture/atoms/PrefectureCheckbox';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { component: PrefectureCheckbox } satisfies ComponentMeta<
  typeof PrefectureCheckbox
>;

export const Container: ComponentStoryObj<typeof PrefectureCheckbox> = {
  args: {
    prefecture: {
      prefCode: 1,
      prefName: '北海道',
    },
  },
};
