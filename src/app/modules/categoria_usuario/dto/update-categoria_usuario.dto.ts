import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaUsuarioDto } from './create-categoria_usuario.dto';

export class UpdateCategoriaUsuarioDto extends PartialType(CreateCategoriaUsuarioDto) {}
