import { Controller, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import { SendUserVerifyEmailDto } from './dto/send-user-verify-email.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('NOTIFICATIONS_SERVICE')
    private readonly kafkaClient: ClientKafka,
  ) {}
  private async onApplicationBootstrap() {
    await this.kafkaClient.connect();
  }

  @EventPattern('send_user_verify_email')
  async verifyEmail(@Payload() dto: SendUserVerifyEmailDto) {
    this.appService.sendUserVerifyEmail(dto);
  }
}
