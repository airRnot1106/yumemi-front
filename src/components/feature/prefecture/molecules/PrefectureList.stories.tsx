import { PrefectureList } from '@/components/feature/prefecture/molecules/PrefectureList';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { component: PrefectureList } satisfies ComponentMeta<
  typeof PrefectureList
>;

export const Container: ComponentStoryObj<typeof PrefectureList> = {};
