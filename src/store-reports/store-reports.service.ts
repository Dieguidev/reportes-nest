import { order_details } from './../../node_modules/.prisma/client/index.d';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PrinterService } from 'src/printer/printer.service';
import {
  getBasicChartSvgReport,
  getHelloWorldReport,
  getStatisticsReport,
  orderByIdReport,
} from 'src/reports';

@Injectable()
export class StoreReportsService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly prisma: PrismaService,
  ) {}

  async getOrderByIdReport(orderId: number) {
    const order = await this.prisma.orders.findUnique({
      where: {
        order_id: orderId,
      },
      include: {
        customers: true,
        order_details: {
          include: {
            products: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    // console.log(JSON.stringify(order, null, 2));

    const docDefinition = orderByIdReport({ data: order as any });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async getSvgChart() {
    const docDefinition = await getBasicChartSvgReport();

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async getStatistics() {
    const topCountries = await this.prisma.customers.groupBy({
      by: ['country'],
      _count: true,
      orderBy: {
        _count: {
          country: 'desc',
        },
      },
      take: 10,
    });

    const docDefinition = await getStatisticsReport({});

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
