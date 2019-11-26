import { Module, Global } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { CarService } from '../car/car.service';

@Global()
@Module({
  controllers: [BusController],
  // providers:[BusService],
  providers: [
    {
      provide: BusService,
      useClass: BusService,
    },
    {
      provide: CarService,
      useClass: BusService,
    }
  ],
  exports: [BusService]
})
export class BusModule { }
