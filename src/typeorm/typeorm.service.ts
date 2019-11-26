import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
// import { CreateCatDto } from '~/car/cat.dto';
import { join } from 'path';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {

  constructor(
    private readonly configDB: ConfigService
  ) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.info(join(__dirname, '..', '/**/entity/*{.ts,.js}'))
    return {
      type: 'mysql',
      host: this.configDB.get("host"),
      port: this.configDB.get("port") as unknown as number,
      username: this.configDB.get("username"),
      password: this.configDB.get("password"),
      database: this.configDB.get("database"),
      entities: [join(__dirname, '..', '/**/entity/*{.ts,.js}')],// 
      synchronize: true,
      debug: true
    };
  }
}
