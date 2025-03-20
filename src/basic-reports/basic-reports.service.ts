import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicReportsService {
  async hello(){
    return 'Hello World!';
  }
}
