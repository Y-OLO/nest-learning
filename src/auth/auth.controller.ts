import { Controller, Get, UseGuards, Req, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) { }

  @Get()
  getToken(): any {
    return this.authService.login()
  }

  @UseGuards(AuthGuard('jwt'))
  @Get("tokenStr")
  tokenStr(@Req() req: Request) {
    console.info(req)
    return req.user;
  }

}
