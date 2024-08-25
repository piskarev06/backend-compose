import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly kafkaClient: ClientKafka,
  ) {}

  private async onApplicationBootstrap() {
    await this.kafkaClient.connect();
  }

  register({ id, email }: RegisterDto): string {
    this.kafkaClient.emit('send_user_verify_email', { userId: id, email });

    return `Hi, user with id ${id}! Welcome to site and verify email, please`;
  }
}
