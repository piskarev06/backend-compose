import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterDto } from './dto/register.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  register(@Body() dto: RegisterDto): string {
    return this.appService.register(dto);
  }
}
