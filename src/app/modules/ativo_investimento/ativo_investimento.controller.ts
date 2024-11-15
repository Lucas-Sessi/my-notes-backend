import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AtivoInvestimentoService } from './ativo_investimento.service';
import { CreateAtivoInvestimentoDto } from './dto/create-ativo_investimento.dto';
import { UpdateAtivoInvestimentoDto } from './dto/update-ativo_investimento.dto';

@Controller('ativo-investimento')
export class AtivoInvestimentoController {
  constructor(private readonly ativoInvestimentoService: AtivoInvestimentoService) {}

  @Post()
  create(@Body() createAtivoInvestimentoDto: CreateAtivoInvestimentoDto) {
    return this.ativoInvestimentoService.create(createAtivoInvestimentoDto);
  }

  @Get()
  findAll() {
    return this.ativoInvestimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ativoInvestimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtivoInvestimentoDto: UpdateAtivoInvestimentoDto) {
    return this.ativoInvestimentoService.update(+id, updateAtivoInvestimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ativoInvestimentoService.remove(+id);
  }
}
