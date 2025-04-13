import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport } from 'src/reports';

@Injectable()
export class ExtraReportService {
  constructor(private readonly printerService: PrinterService) {}

  async getHtmlReport() {
    const docDefinition = await getHelloWorldReport({ name: 'Hello World!' });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
