import { Employee } from './employee';
import { Type } from 'class-transformer';
import { ArrayMinSize, ValidateNested } from 'class-validator';
export class Company {
  name: string;

  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => Employee)
  employees: Employee[];
}
