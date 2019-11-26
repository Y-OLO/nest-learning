
import { IsString, IsInt, IsNotEmpty } from 'class-validator'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateCatDto {

  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsNotEmpty({ message: "字段不为空" })
  @Column()
  name: String;

  @IsNotEmpty({ message: "年龄不为空" })
  @Column()
  age: Number;

  @IsString()
  @Column()
  breed: String;
}