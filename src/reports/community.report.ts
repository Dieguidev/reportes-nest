import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
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
        ],
      },
    ],
  };

  return docDefinition;
};
