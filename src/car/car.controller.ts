import { Controller, Get, Param, Req, HttpCode, Post, Body, Res, HttpStatus, UsePipes, UseGuards, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './entity/cat.dto';
import { CarService } from './car.service';
import { ValidationPipe } from '../validation.pipe';
import { BusService } from '../bus/bus.service';
import { AuthGuard } from '../auth.guard';

const qs = require('querystring')


@Controller('car')
// @UseInterceptors(CacheInterceptor)
export class CarController {

  constructor(
    private readonly carService: CarService,
    private readonly busService: BusService
  ) { }

  @Get()
  findAll(@Res() response: Response) {
    response.status(HttpStatus.OK).json(this.carService.findAll());
  }

  @Get("busSay")
  carBusSay(): string {
    // return null;
    return this.busService.sayBus();
  }

  @Post("createCat")
  @UsePipes(new ValidationPipe())
  @UseGuards(new AuthGuard())
  async createCat(@Body() car: CreateCatDto) {
    return await this.carService.saveCar(car);
  }


  @Get("findCar")
  async findCar(@Query('id') id: number) {
    let car = new CreateCatDto();
    car.id = id
    return await this.carService.findCar(car);
  }


  @Get("/nest")
  getNestParams(@Req() request: Request): String {
    return qs.stringify(request)
  }

  @Get("/*/test")
  getTongPeiFu(): String {
    return "通配符测试"
  }

  @Get("code")
  @HttpCode(204)
  getHttpCode(): String {
    return "获取的状态嘛为204"
  }

  @Get("/promise/:v")
  async finPromis(@Param("v") v): Promise<any[]> {
    return [{ "name": "测试同步" }, { "version": v }];
  }

  @Post()
  postModule(@Res() res: Response, @Body() createCatDto: CreateCatDto) {
    res.status(HttpStatus.OK).json(createCatDto);
  }
}
