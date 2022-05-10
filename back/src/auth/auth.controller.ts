import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')

export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  login(@Body() AuthDto: AuthDto) {
    console.log(AuthDto);
    return this.authService.register(AuthDto);
  }

  @Post('login')
  register(@Body() AuthDto: AuthDto) {
    return this.authService.login();
  }
}