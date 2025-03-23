import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldReport, orderByIdReport } from 'src/reports';

@Injectable()
export class StoreReportsService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly prisma: PrismaService,
  ) {}

  getOrderByIdReport(orderId: number) {
    const docDefinition = orderByIdReport()

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
