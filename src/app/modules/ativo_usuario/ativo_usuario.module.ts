import { Module } from '@nestjs/common';
import { AtivoUsuarioService } from './ativo_usuario.service';
import { AtivoUsuarioController } from './ativo_usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/db/db.module';
import { AtivoUsuario } from './entities/ativo_usuario.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([AtivoUsuario])
  ],
  controllers: [AtivoUsuarioController],
  providers: [AtivoUsuarioService],
})
export class AtivoUsuarioModule {}
