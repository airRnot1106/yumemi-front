import { Graph } from '@/components/base/molecules/Graph';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { component: Graph } satisfies ComponentMeta<typeof Graph>;

export const Default: ComponentStoryObj<typeof Graph> = {
  args: {
    title: 'Graph',
    xAxis: {
      title: 'X Axis',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: 'Y Axis',
    },
    series: [
      {
        name: 'Series 1',
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
      {
        name: 'Series 2',
        data: [
          129.9, 171.5, 206.4, 229.2, 244.0, 276.0, 235.6, 248.5, 316.4, 294.1,
          195.6, 154.4,
        ],
      },
    ],
  },
};
