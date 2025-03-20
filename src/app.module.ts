import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrismaModule } from './database/prisma/prisma.module';
import { PrinterModule } from './printer/printer.module';

@Module({
  imports: [BasicReportsModule, PrismaModule, PrinterModule],
})
export class AppModule {}
