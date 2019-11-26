import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';



@Injectable()
export class ValidationPipe implements PipeTransform<any> {


  async transform(value: any, argumentMetadata: ArgumentMetadata) {
    console.info("管道开始执行")
    console.info(argumentMetadata)
    let { metatype } = argumentMetadata
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      console.info(errors)
      throw new BadRequestException(errors.map(item => {
        return item.property + item.constraints.isNotEmpty || item.constraints.isString
      }));
    }
    console.info("管道结束执行")
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
