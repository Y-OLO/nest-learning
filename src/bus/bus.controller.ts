import { Controller, Get, Inject } from '@nestjs/common';
import { BusService } from './bus.service';
import { CarService } from '~/car/car.service';

@Controller('bus')
export class BusController {

  constructor(
    private readonly busService: BusService,

  ) { }

  @Get()
  busSay(): string {
    return this.busService.sayBus();
  }
}
