import { PartialType } from '@nestjs/swagger';
import { CreateAtivoInvestimentoDto } from './create-ativo_investimento.dto';

export class UpdateAtivoInvestimentoDto extends PartialType(CreateAtivoInvestimentoDto) {}
