import { Tab } from '@/components/base/molecules/Tab';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { component: Tab } satisfies ComponentMeta<typeof Tab>;

export const Default: ComponentStoryObj<typeof Tab> = {
  args: {
    items: [
      { label: 'Tab 1', value: 'tab1' },
      { label: 'Tab 2', value: 'tab2' },
      { label: 'Tab 3', value: 'tab3' },
    ],
    activeValue: 'tab1',
  },
};
