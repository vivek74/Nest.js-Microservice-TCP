import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController')
  constructor(private appService: AppService) {}

  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.log('Adding' + data.toString());
    return this.appService.accumulate(data);
  }
}
