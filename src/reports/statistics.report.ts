import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import * as Utils from '../helpers/chart-utils';
import { generateDonutChart } from './charts/donut.chart';

interface TopCountry {
  country: string;
  customers: number;
}

interface ReportOptions {
  topCountries: TopCountry[];
  title?: string;
  subtitle?: string;
}

const generateTopCountryDonut = async (
  topCountry: TopCountry[],
): Promise<string> => {
  const data = {
    labels: topCountry.map((country) => country.country),
    datasets: [
      {
        label: 'Dataset 1',
        data: topCountry.map((country) => country.customers),
        // backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        position: 'left',
      },
      plugins: {
        datalabels: {
          color: 'white',
          font: {
            weight: 'bold',
            size: '14',
          },
        },
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Doughnut Chart',
      // },
    },
  };

  return Utils.chartJsToImage(config);
};

export const getStatisticsReport = async (
  options: ReportOptions,
): Promise<TDocumentDefinitions> => {
  const { title, subtitle, topCountries } = options;

  const donutChart = await generateDonutChart({
    entries: topCountries.map((c) => ({
      label: c.country,
      value: c.customers,
    })),
    position: 'left',
  });
  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        image: donutChart,
        width: 500,
      },
    ],
  };

  return docDefinition;
};
