import { Injectable } from '@nestjs/common';

@Injectable()
export class BusService {

  sayBus() {
    return "我是bus"
  }

}
