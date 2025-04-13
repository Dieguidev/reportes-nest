import fs from 'fs';

import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';
import { getHtmlContent } from 'src/helpers/html-to-pdfMake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/reports/sections/header.section';
import { footerSection } from 'src/reports/sections/footer.section';

@Injectable()
export class ExtraReportService {
  constructor(private readonly printerService: PrinterService) {}

  getHtmlReport() {
    const html = fs.readFileSync('src/reports/html/basic-02.html', 'utf-8');

    const content = getHtmlContent(html, {
      client: 'Dieguidev',
      title: 'Curso de Nestjs',
    });

    const docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 110, 40, 60],
      header: headerSection({
        title: 'HTML to PdfMake',
        subtitle: 'Convetir HTML a PDF',
      }),
      footer: footerSection,
      content: content,
    };

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
