import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.info('日志中间件开始执行')
    console.info(req, res)
    next();
    console.info('日志中间件执行结束')
  }
}
