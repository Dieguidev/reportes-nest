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
          type: 'line',
          label: 'Dataset 1',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
          fill: false,
          data: [-33, 26, 29, 89, -41, 70, -84],
        },
        {
          label: 'Dataset 2',
          backgroundColor: 'rgb(255, 99, 132)',
          data: [-42, 73, -69, -94, -81, 18, 87],
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          label: 'Dataset 3',
          backgroundColor: 'rgb(75, 192, 192)',
          data: [93, 60, -15, 77, -59, 82, -44],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'My chart',
      },
    },
  };

  return Utils.chartJsToImage(chartConfig);
};

export const getBasicChartSvgReport =
  async (): Promise<TDocumentDefinitions> => {
    const chart = await generateChartImage();
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
      ],
    };
  };
