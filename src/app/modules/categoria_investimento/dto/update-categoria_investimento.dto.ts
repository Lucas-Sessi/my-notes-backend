import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaInvestimentoDto } from './create-categoria_investimento.dto';

export class UpdateCategoriaInvestimentoDto extends PartialType(CreateCategoriaInvestimentoDto) {}
