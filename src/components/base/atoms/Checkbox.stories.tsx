import { Checkbox } from '@/components/base/atoms/Checkbox';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { component: Checkbox } satisfies ComponentMeta<typeof Checkbox>;

export const Default: ComponentStoryObj<typeof Checkbox> = {
  args: {
    label: 'Checkbox',
    checked: false,
  },
};
