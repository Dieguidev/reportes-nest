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
        columns: [
          {
            stack: [
              {
                text: '10 paises con más clientes',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              {
                image: donutChart,
                width: 320,
              },
            ],
          },

          {
            layout: 'lightHorizontalLines',
            width: 'auto',
            table: {
              headerRows: 1,
              widths: [100, 'auto'],
              body: [
                [
                  { text: 'Country', style: 'tableHeader' },
                  { text: 'Customers', style: 'tableHeader' },
                ],
                ...topCountries.map((c) => [
                  { text: c.country, style: 'tableData' },
                  { text: c.customers, style: 'tableData' },
                ]),
              ],
            },
          },
        ],
      },
    ],
  };

  return docDefinition;
};
