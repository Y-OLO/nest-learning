import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AuthGuard } from './auth.guard';

const compression = require("compression");
const helmet = require("helmet");
const csurf = require("csurf");
const rateLimit = require("express-rate-limit");

declare const module: any;//添加项

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }));

  // 开启跨域
  app.enableCors();

  // 全局api
  app.setGlobalPrefix('api');

  // 压缩可以大大减小响应主体的大小，从而提高 Web 应用程序的速度
  app.use(compression());

  //通过适当地设置 HTTP 头，Helmet 可以帮助保护您的应用免受一些众所周知的 Web 漏洞的影响
  app.use(helmet());

  // 跨站点请求伪造（称为 CSRF 或 XSRF）是一种恶意利用网站，其中未经授权的命令从 Web 应用程序信任的用户传输。要减轻此类攻击，您可以使用 csurf 软件包
  // app.use(csurf());

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
  // 为了保护您的应用程序免受暴力攻击，您必须实现某种速率限制。
  app.use(limiter);

  // 全局设置守卫
  // app.useGlobalGuards(new AuthGuard());

  await app.listen(3000, '0.0.0.0');

  //添加项
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();
