import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaInvestimentoService } from './categoria_investimento.service';
import { CreateCategoriaInvestimentoDto } from './dto/create-categoria_investimento.dto';
import { UpdateCategoriaInvestimentoDto } from './dto/update-categoria_investimento.dto';

@Controller('categoria-investimento')
export class CategoriaInvestimentoController {
  constructor(private readonly categoriaInvestimentoService: CategoriaInvestimentoService) {}

  @Post()
  create(@Body() createCategoriaInvestimentoDto: CreateCategoriaInvestimentoDto) {
    return this.categoriaInvestimentoService.create(createCategoriaInvestimentoDto);
  }

  @Get()
  findAll() {
    return this.categoriaInvestimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaInvestimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaInvestimentoDto: UpdateCategoriaInvestimentoDto) {
    return this.categoriaInvestimentoService.update(+id, updateCategoriaInvestimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaInvestimentoService.remove(+id);
  }
}
