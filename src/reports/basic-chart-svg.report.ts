import fs from 'fs';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import * as Utils from '../helpers/chart-utils';

const svgContent = fs.readFileSync('src/assets/ford.svg', 'utf8');

const generateChartImage = async () => {
  const chartConfig = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Mi gráfico',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          data: [33, 26, 29, 89, 41, 70, 84],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
      ],
    },
  };

  return Utils.chartJsToImage(chartConfig);
};

const generateDonut = async () => {
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart',
      },
    },
  };

  return Utils.chartJsToImage(config);
};

export const getBasicChartSvgReport =
  async (): Promise<TDocumentDefinitions> => {
    const [chart, chartDonut] = await Promise.all([
      generateChartImage(),
      generateDonut(),
    ]);

    return {
      content: [
        {
          svg: svgContent,
          width: 100,
          fit: [100, 100],
        },
        {
          image: chart,
          width: 500,
        },
        {
          image: chartDonut,
          width: 500,
        },
      ],
    };
  };
