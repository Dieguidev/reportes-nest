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

      //Detalles del cliente
      {
        table: {
          widths: ['auto', '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Datos del Cliente',
                fillColor: '#5775e1',
                color: 'white',
                colSpan: 4,
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'RAZÓN SOCIAL',
                fillColor: '#343A40',
                color: 'white',
                bold: true,
                border: [true, false, false, false],
              },
              {
                text: (function () {
                  const text =
                    'Nombre de la empresaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
                  if (text.length > 40) {
                    return text.substring(0, 40) + '...';
                  }
                  return text;
                })(),
                fillColor: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'DIRECCIÓN',
                fillColor: '#343A40',
                color: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'Direccion falsa 123',
                fillColor: 'white',
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: 'RUT',
                fillColor: '#343A40',
                color: 'white',
                bold: true,
                border: [true, false, false, false],
              },
              {
                text: '76.123.456-7',
                fillColor: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'TELÉFONO',
                fillColor: '#343A40',
                color: 'white',
                border: [true, false, false, false],
              },
              {
                text: '+56 2 24967000',
                fillColor: 'white',
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: 'GIRO',
                fillColor: '#343A40',
                color: 'white',
                bold: true,
                border: [true, false, true, true],
              },
              {
                text: 'Comercializadora de productos forestales',
                fillColor: 'white',
                border: [true, false, false, true],
              },
              {
                text: 'CONDICIÓN DE PAGO',
                fillColor: '#343A40',
                color: 'white',
                border: [true, false, false, true],
              },
              {
                text: 'Contado',
                fillColor: 'white',
                border: [true, false, true, true],
              },
            ],
            [
              {
                text: '',
                colSpan: 4,
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'NOMBRE DEL PROYECTO',
                fillColor: '#343A40',
                color: 'white',
                bold: true,
                border: [true, false, true, false],
              },
              {
                text: 'Nombre del proyecto',
                fillColor: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'CONTACTO',
                fillColor: '#343A40',
                color: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'Nombre del contacto',
                fillColor: 'white',
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: 'DIRECCIÓN',
                fillColor: '#343A40',
                color: 'white',
                bold: true,
                border: [true, false, false, false],
              },
              {
                text: 'Direccion falsa 123',
                fillColor: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'EMAIL',
                fillColor: '#343A40',
                color: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'email@gmail.com',
                fillColor: 'white',
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: 'CIUDAD',
                fillColor: '#343A40',
                color: 'white',
                bold: true,
                border: [true, false, true, true],
              },
              {
                text: 'Santiago',
                fillColor: 'white',
                border: [true, false, false, true],
              },
              {
                text: 'TELÉFONO',
                fillColor: '#343A40',
                color: 'white',
                border: [true, false, false, true],
              },
              {
                text: '+56 2 24967000',
                fillColor: 'white',
                border: [true, false, true, true],
              },
            ],
            [
              {
                text: '',
                colSpan: 4,
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'VENDEDOR',
                fillColor: '#343A40',
                color: 'white',
                bold: true,
                border: [true, false, true, false],
              },
              {
                text: 'Nombre del vendedor',
                fillColor: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'EMAIL',
                fillColor: '#343A40',
                color: 'white',
                border: [true, false, false, false],
              },
              {
                text: 'emailvendedor@gmail.com',
                fillColor: 'white',
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: 'TELÉFONO',
                fillColor: '#343A40',
                color: 'white',
                bold: true,
                border: [true, false, true, true],
              },
              {
                text: '+56 2 24967000',
                fillColor: 'white',
                border: [true, false, false, true],
              },
              {
                text: '',
                fillColor: '#343A40',
                color: 'white',
                border: [true, false, false, true],
              },
              {
                text: '',
                fillColor: 'white',
                border: [true, false, true, true],
              },
            ],
          ],
        },
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
