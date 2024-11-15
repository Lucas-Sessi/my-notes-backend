import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAtivoInvestimentoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  desc_ativo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sigla_ativo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id_categoria: number;
}
