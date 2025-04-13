import fs from 'fs';

import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';
import { getHtmlContent } from 'src/helpers/html-to-pdfMake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/reports/sections/header.section';

@Injectable()
export class ExtraReportService {
  constructor(private readonly printerService: PrinterService) {}

  getHtmlReport() {
    const html = fs.readFileSync('src/reports/html/basi-01.html', 'utf-8');
    console.log(html);

    const content = getHtmlContent(html);

    const docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 110, 40, 60],
      header: headerSection({
        title: 'HTML to PdfMake',
        subtitle: 'Convetir HTML a PDF',
      }),
      content: content,
    };

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
