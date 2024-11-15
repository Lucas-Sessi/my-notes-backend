import { Module } from '@nestjs/common';
import { CategoriaInvestimentoService } from './categoria_investimento.service';
import { CategoriaInvestimentoController } from './categoria_investimento.controller';
import { DatabaseModule } from 'src/database/db/db.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaInvestimento } from './entities/categoria_investimento.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([CategoriaInvestimento])
  ],
  controllers: [CategoriaInvestimentoController],
  providers: [CategoriaInvestimentoService],
})
export class CategoriaInvestimentoModule {}
