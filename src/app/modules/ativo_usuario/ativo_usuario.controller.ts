import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AtivoUsuarioService } from './ativo_usuario.service';
import { CreateAtivoUsuarioDto } from './dto/create-ativo_usuario.dto';
import { UpdateAtivoUsuarioDto } from './dto/update-ativo_usuario.dto';

@Controller('ativo-usuario')
export class AtivoUsuarioController {
  constructor(private readonly ativoUsuarioService: AtivoUsuarioService) {}

  @Post('create')
  create(@Body() createAtivoUsuarioDto: CreateAtivoUsuarioDto) {
    return this.ativoUsuarioService.create(createAtivoUsuarioDto);
  }

  @Get('list/user/:id')
  findAll(@Param('id', ParseIntPipe) idUser: number) {
    return this.ativoUsuarioService.findAll(idUser);
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.ativoUsuarioService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAtivoUsuarioDto: UpdateAtivoUsuarioDto) {
    return this.ativoUsuarioService.update(+id, updateAtivoUsuarioDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.ativoUsuarioService.remove(+id);
  }
}
