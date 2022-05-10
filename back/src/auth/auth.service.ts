import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(AuthDto) {
    // Generate the password hash
    const hash = await argon.hash(AuthDto.hashedPassword);
    // save the new user to the database
    const user = await this.prisma.user.create({
      data: {
        email: AuthDto.email,
        hashedPassword: hash,
        lastName: AuthDto.lastName,
      },
    });

    delete user.hashedPassword;
    // return the saved user
    return user;
  }

  login() {
    return {msg: 'login'};
  }
}