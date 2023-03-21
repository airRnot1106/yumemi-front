import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';

export type GraphProps = {
  title: string;
  xAxis: {
    title: string;
    categories: string[];
  };
  yAxis: {
    title: string;
  };
  series: {
    name: string;
    data: number[];
  }[];
};

export const Graph = ({ title, xAxis, yAxis, series }: GraphProps) => {
  const options: Highcharts.Options = {
    title: {
      text: title,
    },
    xAxis: {
      title: {
        text: xAxis.title,
        align: 'high',
      },
      categories: xAxis.categories,
    },
    yAxis: {
      title: {
        text: yAxis.title,
        align: 'high',
      },
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'top',
    },
    series: series.map((s) => ({
      type: 'line',
      name: s.name,
      data: s.data,
    })),
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    ></HighchartsReact>
  );
};
