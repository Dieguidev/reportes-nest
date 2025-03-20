import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [BasicReportsModule, PrismaModule],
})
export class AppModule {}
