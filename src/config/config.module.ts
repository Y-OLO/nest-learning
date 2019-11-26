import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

// development
// production
// test 

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${process.env.NODE_ENV || 'development'}.env`),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule { }
