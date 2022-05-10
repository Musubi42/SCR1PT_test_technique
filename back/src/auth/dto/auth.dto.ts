import { IsNotEmpty, IsEmail, IsString, IsAlphanumeric } from "class-validator";

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  // @IsString() 
  @IsAlphanumeric()
  @IsNotEmpty()
  hashedPassword: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
