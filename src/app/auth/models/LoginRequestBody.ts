import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginRequestBody {
  @ApiProperty({
    example: 'teste',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: '3decd49a6c6dce88c16a85b9a8e42b51aa36f1e2',
  })
  @IsString()
  password: string;
}
