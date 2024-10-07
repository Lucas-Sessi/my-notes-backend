import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      name: 'dbacesso',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_ACESSO_HOST'),
        port: configService.get<number>('DATABASE_ACESSO_PORT'),
        username: configService.get<string>('DATABASE_ACESSO_USER'),
        password: configService.get<string>('DATABASE_ACESSO_PASSWORD'),
        database: configService.get<string>('DATABASE_ACESSO_NAME'),
        entities: [],
        synchronize: false,
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseAcessoModule {}
