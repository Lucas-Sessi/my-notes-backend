import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAtivoUsuarioDto } from './create-ativo_usuario.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateAtivoUsuarioDto extends PartialType(CreateAtivoUsuarioDto) {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    idUsuario: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    idAtivo: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    notaAtivo: number;
}
