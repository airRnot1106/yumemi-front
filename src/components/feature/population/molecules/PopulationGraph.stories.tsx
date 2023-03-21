import { PopulationGraph } from '@/components/feature/population/molecules/PopulationGraph';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { component: PopulationGraph } satisfies ComponentMeta<
  typeof PopulationGraph
>;

export const Container: ComponentStoryObj<typeof PopulationGraph> = {};
