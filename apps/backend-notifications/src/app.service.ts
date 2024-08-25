import { Injectable } from '@nestjs/common';
import { SendUserVerifyEmailDto } from './dto/send-user-verify-email.dto';

@Injectable()
export class AppService {
  sendUserVerifyEmail({ userId, email }: SendUserVerifyEmailDto): void {
    console.log(`Consume event with userId: ${userId} and email: ${email}`);
  }
}
