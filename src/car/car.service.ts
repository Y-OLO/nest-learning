import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './entity/cat.dto';
import { InjectRepository, InjectConnection, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {

  constructor(
    @InjectRepository(CreateCatDto)
    private readonly carDto: Repository<CreateCatDto>
  ) { }

  private readonly car: CreateCatDto[] = [];

  createCat(car: CreateCatDto) {
    this.car.push(car)
  }

  findAll(): CreateCatDto[] {
    return this.car
  }

  saveCar(car: CreateCatDto): Promise<CreateCatDto> {
    return this.carDto.save(car);
  }

  findCar(car: CreateCatDto): Promise<CreateCatDto> {
    return this.carDto.findOne(car)
  }
}
