import { SiteFooterPresenter } from '@/components/feature/site/molecules/SiteFooter';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  component: SiteFooterPresenter,
  decorators: [(Story) => <div style={{ minHeight: '5svh' }}>{Story()}</div>],
} satisfies ComponentMeta<typeof SiteFooterPresenter>;

export const Default: ComponentStoryObj<typeof SiteFooterPresenter> = {
  args: {
    content: '@airRnot',
  },
};
