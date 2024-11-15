import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';
import { AppModule } from './app/app.module';
import { Swagger } from './services/swagger/swagger.config';

async function bootstrap() {
  let app: NestExpressApplication;

  const keyPath = './certs/key.pem';
  const certPath = './certs/cert.pem';

  if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    const httpsOptions = {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    };

    app = await NestFactory.create<NestExpressApplication>(AppModule, {
      httpsOptions,
    });
  } else {
    app = await NestFactory.create<NestExpressApplication>(AppModule);
  }

  const configService = app.get(ConfigService);

  // const uploadDir = configService.get<string>('UPLOAD_DIR');
  const port = configService.get<number>('PORT');
  const enableSwagger = configService.get<boolean>('HABILITAR_SWAGGER');

  // app.use('/assets/images', express.static(uploadDir));

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  if (enableSwagger) {
    const swagger = new Swagger();
    swagger.setup(app);
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(port, () => {
    Logger.verbose(`API rodando na porta: ${port}`, 'Bootstrap');

    fs.existsSync(keyPath) && fs.existsSync(certPath)
      ? Logger.verbose('API rodando com o protocolo HTTPS', 'INFO')
      : Logger.verbose('API rodando com o protocolo HTTP', 'INFO');

    enableSwagger
      ? Logger.verbose('Swagger habilitado', 'INFO')
      : Logger.verbose('Swagger desabilitado', 'INFO');
  });
}
bootstrap();
