import { Controller, Get, Res } from '@nestjs/common';
import { ExtraReportService } from './extra-report.service';
import { Response } from 'express';

@Controller('extra-report')
export class ExtraReportController {
  constructor(private readonly extraReportService: ExtraReportService) {}

  @Get('html-report')
  async getHtmlReport(@Res() response: Response) {
    const pdfDoc = await this.extraReportService.getHtmlReport();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'HTML-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('community-report')
  async setCommunityReport(@Res() response: Response) {
    const pdfDoc = await this.extraReportService.getCommunityReport();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'CommunityReport-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('custom-size')
  async setCustomReport(@Res() response: Response) {
    const pdfDoc = await this.extraReportService.getCustomSize();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Custom-Size';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
