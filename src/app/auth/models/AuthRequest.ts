import { Request } from 'express';
import { UserEntity } from 'src/app/modules/user/model/entities/user.entity';

export class AuthRequest extends Request {
  user: UserEntity;
}
