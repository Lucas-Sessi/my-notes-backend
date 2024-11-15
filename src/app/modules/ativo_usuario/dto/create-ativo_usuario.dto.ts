import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { UserEntity } from "../../user/model/entities/user.entity";
import { AtivoInvestimento } from "../../ativo_investimento/entities/ativo_investimento.entity";

export class CreateAtivoUsuarioDto {
    @ApiProperty()
    @IsNotEmpty()
    id_usuario: number;
  
    @ApiProperty()
    @IsNotEmpty()
    id_ativo: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    nota_ativo: number;
}
