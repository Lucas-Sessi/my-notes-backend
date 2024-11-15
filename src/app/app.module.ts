import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { DatabaseModule } from 'src/database/db/db.module';
import { LoggerInterceptor } from 'src/utils/interceptors/logger.interceptor';
import { ResponseInterceptor } from 'src/utils/interceptors/response.interceptor';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { configValidationSchema } from './config/config.validation';
import { UserModule } from './modules/user/user.module';
import { CategoriaInvestimentoModule } from './modules/categoria_investimento/categoria_investimento.module';
import { AtivoInvestimentoModule } from './modules/ativo_investimento/ativo_investimento.module';
import { CategoriaUsuarioModule } from './modules/categoria_usuario/categoria_usuario.module';
import { AtivoUsuarioModule } from './modules/ativo_usuario/ativo_usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: configValidationSchema,
    }),
    UserModule,
    DatabaseModule,
    AuthModule,
    CategoriaInvestimentoModule,
    AtivoInvestimentoModule,
    CategoriaUsuarioModule,
    AtivoUsuarioModule,
  ],
  controllers: [],
  providers: [
    //{
      //provide: APP_GUARD,
      //useClass: JwtAuthGuard,
    //},
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
