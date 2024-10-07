import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from '../controller/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
