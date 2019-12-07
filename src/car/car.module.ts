import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { CreateCatDto } from './entity/cat.dto';
import { Employee } from './entity/employee';
import { Company } from './entity/company';

@Module({
  imports: [TypeOrmModule.forFeature([CreateCatDto, Company])],
  controllers: [CarController],
  providers: [CarService],
  exports: [CarService],
})
export class CarModule {}
