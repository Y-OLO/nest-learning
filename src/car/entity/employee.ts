import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Company } from './company';
@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @ManyToOne(
    type => Company,
    company => company.employees,
  )
  @JoinTable()
  company: Company;
}
