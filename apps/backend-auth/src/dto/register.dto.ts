import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
