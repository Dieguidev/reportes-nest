import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class BasicReportsService {
  constructor(private readonly prisma: PrismaService) {}
  async hello() {
    return await this.prisma.employees.findFirst();
  }
}
