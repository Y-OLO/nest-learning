import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader("token"),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      algorithms: jwtConstants.algorithm
    });
  }

  async validate(payload: any) {
    console.info(payload)
    return { ...payload };
  }
}
