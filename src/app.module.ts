import { CacheModule, Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './car/car.controller';
import { LoggerMiddleware } from './logger.middleware';
import { CarModule } from './car/car.module';
import { BusModule } from './bus/bus.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './typeorm/typeorm.service';
import { TypeormModule } from './typeorm/typeorm.module';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    CarModule,
    BusModule,
    CacheModule.register(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeormService,
    }),
    TypeormModule,
    AuthModule
  ],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('/api/car')
    // 设置只允许某种请求
    // consumer.apply(LoggerMiddleware).forRoutes({path:'car',method:RequestMethod.GET})
    consumer.apply(LoggerMiddleware).forRoutes(CarController)
    // throw new Error("Method not implemented.");
    console.info(CarModule)
  }

}
