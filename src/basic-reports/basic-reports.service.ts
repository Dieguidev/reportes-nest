import { Injectable, NotFoundException } from '@nestjs/common';
import { continents } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PrinterService } from 'src/printer/printer.service';
import {
  getCountriesReport,
  getEmploymentLetterByIdReport,
  getEmploymentLetterReport,
  getHelloWorldReport,
} from 'src/reports';

@Injectable()
export class BasicReportsService {
  constructor(
    private readonly printerService: PrinterService,
    private readonly prisma: PrismaService,
  ) {}

  hello() {
    const docDefinition = getHelloWorldReport({ name: 'John Doe' });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetterReport();

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
  async employmentLetterById(employeeId: number) {
    const employee = await this.prisma.employees.findUnique({
      where: {
        id: employeeId,
      },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    const docDefinition = getEmploymentLetterByIdReport({
      employeeHours: employee.hours_per_day,
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: 'Company Dieguidev',
      employerName: 'Diego Garay',
      employerPosition: 'Gerente',
    });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async getCountriesReport(continent?: string) {

    if(continent && !Object.values(continents).includes(continent as continents)){
      throw new NotFoundException('Continent not found');
    }

    const countries = await this.prisma.countries.findMany({
      where: {
        local_name: {
          not: null,
        },
        continent: {
          equals: continent as continents,
        },
      },
    });

    const docDefinition = getCountriesReport({ countries });

    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
