import type { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {}

export const getStatisticsReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    content: [`Hola mundo`],
  };

  return docDefinition;
};
