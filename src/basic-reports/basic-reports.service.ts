import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

import PdfPrinter from 'pdfmake';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
};

@Injectable()
export class BasicReportsService {
  constructor(private readonly prisma: PrismaService) {}
   hello() {
    const printer = new PdfPrinter(fonts);
    const docDefinition: TDocumentDefinitions = {
      content: ['Hola mundo'],
    };
    const doc = printer.createPdfKitDocument(docDefinition);

    return doc;
  }
}
