import { Module } from '@nestjs/common';
import { AtivoInvestimentoService } from './ativo_investimento.service';
import { AtivoInvestimentoController } from './ativo_investimento.controller';
import { DatabaseModule } from 'src/database/db/db.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtivoInvestimento } from './entities/ativo_investimento.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([AtivoInvestimento])
  ],
  controllers: [AtivoInvestimentoController],
  providers: [AtivoInvestimentoService],
})
export class AtivoInvestimentoModule {}
