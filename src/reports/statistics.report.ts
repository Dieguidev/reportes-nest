import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import * as Utils from '../helpers/chart-utils';
import { generateDonutChart } from './charts/donut.chart';
import { headerSection } from './sections/header.section';
import { generateLineChart } from './charts/line.chart';
import { generateBarChart } from './charts/barchart.chart';
import { footerSection } from './sections/footer.section';
import { generatePolarAreaChart } from './charts/polar-area.char';

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

  const [donutChart, lineChart, barChart, polarAreaChart] = await Promise.all([
    generateDonutChart({
      entries: topCountries.map((c) => ({
        label: c.country,
        value: c.customers,
      })),
      position: 'left',
    }),
    generateLineChart(),
    generateBarChart(),
    generatePolarAreaChart(),
  ]);

  const docDefinition: TDocumentDefinitions = {
    pageMargins: [40, 100, 40, 60],
    header: headerSection({
      title: title || 'Estadisticas de clientes',
      subtitle: subtitle || 'Top 10 paises con más clientes',
    }),
    footer: footerSection,
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
      {
        image: lineChart,
        width: 500,
        margin: [0, 20, 0, 0],
      },
      {
        columnGap: 10,
        columns: [
          {
            image: barChart,
            width: 250,
            margin: [0, 20, 0, 0],
          },
          {
            image: polarAreaChart,
            width: 250,
            margin: [0, 20, 0, 0],
          },
        ],
      },
    ],
  };

  return docDefinition;
};
