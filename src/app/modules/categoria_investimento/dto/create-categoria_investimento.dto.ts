import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaInvestimentoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  desc_categoria: string;
}
