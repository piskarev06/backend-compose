import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendUserVerifyEmailDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
