import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 8,
    },
    content: [
      //Encabezado
      {
        columns: [
          {
            image: 'src/assets/tucan-code-logo.png',
            width: 50,
          },
          {
            alignment: 'center',
            text: `FORESTAL SANTA ROSA SPA\n RUT 76.123.456-7\n CAMINO LA MONTAÑA PONIENTE 627 .KM 16 1/2 LAMPA\n TELÉFONO +56 2 24967000`,
          },
          {
            alignment: 'right',
            width: 180,
            layout: 'borderBlue',
            table: {
              body: [
                [
                  {
                    layout: 'noBorders',
                    table: {
                      body: [
                        ['Nº PRESUPUESTO:', '123456'],
                        ['FECHA:', '10 DE MAYO DE 2024'],
                        ['VERSIÓN:', '2024 - 0001'],
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      //Linea Horizontal
      {
        margin: [0, 5],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3A4546',
          },
        ],
      },
    ],
  };

  return docDefinition;
};
