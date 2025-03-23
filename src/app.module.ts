import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrismaModule } from './database/prisma/prisma.module';
import { PrinterModule } from './printer/printer.module';
import { StoreReportsModule } from './store-reports/store-reports.module';

@Module({
  imports: [BasicReportsModule, PrismaModule, PrinterModule, StoreReportsModule],
})
export class AppModule {}
