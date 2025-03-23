import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from './sections/header.section';
import { countries as Country } from '@prisma/client';
import { footerSection } from './sections/footer.section';

interface ReportOptions {
  title?: string;
  subtitle?: string;
  countries: Country[];
}

export const getCountriesReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { title, subtitle, countries } = options;
  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: title ?? 'Countries Report',
      subtitle: subtitle ?? 'List of countries',
    }),
    footer: footerSection,
    pageMargins: [40, 100, 40, 60],
    content: [
      {
        layout: 'lightHorizontalLines', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: ['auto', 50, 50, '*', 'auto', '*'],

          body: [
            ['ID', 'ISO2', 'ISO3', 'Name', 'Continent', 'Local Name'],
            ...countries.map((country) => [
              country.id.toString() || '',
              country.iso2 || '',
              country.iso3 || '',
              { text: country.name || '', bold: true },
              country.continent || '',
              country.local_name || '',
            ]),
            ['', '', '', '', '', ''],
            [
              '',
              '',
              '',
              '',
              'Total',
              { text: `${countries.length} paises`, bold: true },
            ],
          ],
        },
      },
      //Tabla de totales
      {
        text: 'Totales',
        style: {
          bold: true,
          fontSize: 18,
          margin: [0, 40, 0, 0],
        },
      },
      {
        layout: 'noBorders',
        table: {
          headerRows: 1,
          widths: [50, 50, 50, '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Total de paises',
                colSpan: 3,
                bold: true,
              },
              {},
              {},
              {
                text: countries.length.toString(),
                bold: true,
              },
              {},
              {},
            ],
          ],
        },
      },
    ],
  };
};
