import { SiteHeaderPresenter } from '@/components/feature/site/molecules/SiteHeader';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  component: SiteHeaderPresenter,
  decorators: [(Story) => <div style={{ minHeight: '10svh' }}>{Story()}</div>],
} satisfies ComponentMeta<typeof SiteHeaderPresenter>;

export const Default: ComponentStoryObj<typeof SiteHeaderPresenter> = {
  args: {
    title: 'Yumemi-Front',
  },
};
