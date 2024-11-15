import { Module } from '@nestjs/common';
import { CategoriaUsuarioService } from './categoria_usuario.service';
import { CategoriaUsuarioController } from './categoria_usuario.controller';
import { DatabaseModule } from 'src/database/db/db.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaUsuario } from './entities/categoria_usuario.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([CategoriaUsuario])
  ],
  controllers: [CategoriaUsuarioController],
  providers: [CategoriaUsuarioService],
})
export class CategoriaUsuarioModule {}
