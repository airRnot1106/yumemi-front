import { Headline } from '@/components/base/atoms/Headline';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { component: Headline } satisfies ComponentMeta<typeof Headline>;

export const Default: ComponentStoryObj<typeof Headline> = {
  args: {
    text: 'Hello World',
  },
};

export const Prefecture: ComponentStoryObj<typeof Headline> = {
  args: {
    text: '都道府県',
  },
};
