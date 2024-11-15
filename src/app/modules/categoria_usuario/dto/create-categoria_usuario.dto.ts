import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCategoriaUsuarioDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_usuario: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_categoria: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  percent_ideal_cateira: number;
}
