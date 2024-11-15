import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtivoInvestimento } from 'src/app/modules/ativo_investimento/entities/ativo_investimento.entity';
import { AtivoUsuario } from 'src/app/modules/ativo_usuario/entities/ativo_usuario.entity';
import { CategoriaInvestimento } from 'src/app/modules/categoria_investimento/entities/categoria_investimento.entity';
import { CategoriaUsuario } from 'src/app/modules/categoria_usuario/entities/categoria_usuario.entity';
import { UserEntity } from 'src/app/modules/user/model/entities/user.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        entities: [
          UserEntity,
          AtivoUsuario,
          CategoriaInvestimento,
          AtivoInvestimento,
          CategoriaUsuario,
        ],
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
