import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './entity/cat.dto';
import {
  InjectRepository,
  InjectConnection,
  TypeOrmModule,
} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entity/employee';
import { Company } from './entity/company';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CreateCatDto)
    private readonly carDto: Repository<CreateCatDto>,
    // @InjectRepository(Employee)
    // private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  private readonly car: CreateCatDto[] = [];

  findCom() {
    return this.companyRepository.find();
  }

  async create(company: Company): Promise<string> {
    // let company = new Company();
    // company.name = '12313213';
    // let employee = new Employee();
    // employee.name = 'novak';
    // employee.age = 20;
    // employee.address = 'shanghai12';
    // company.employees = [employee];

    return this.companyRepository
      .save(company)
      .then(res => {
        return 'create employee ...done';
      })
      .catch(err => {
        return err;
      });
  }

  createCat(car: CreateCatDto) {
    this.car.push(car);
  }

  findAll(): CreateCatDto[] {
    return this.car;
  }

  saveCar(car: CreateCatDto): Promise<CreateCatDto> {
    return this.carDto.save(car);
  }

  findCar(car: CreateCatDto): Promise<CreateCatDto> {
    return this.carDto.findOne(car);
  }
}
