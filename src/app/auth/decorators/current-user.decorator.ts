import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { UserEntity } from 'src/app/modules/user/model/entities/user.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): UserEntity => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
