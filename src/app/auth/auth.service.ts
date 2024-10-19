import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../modules/user/model/entities/user.entity';
import { UserService } from '../modules/user/service/user.service';
import { UserToken } from './models/UserToken';
import { userPayload } from './models/userPayload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: UserEntity): UserToken {
    const payload: userPayload = {
      sub: Number(user.id),
      nome: user.nome,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);

    if (user.password !== password)
      throw new HttpException(
        'Credenciais inválidas!',
        HttpStatus.UNAUTHORIZED,
      );

    const newObjectReturn = {
      ...user,
      password: undefined,
    };

    return newObjectReturn;
  }

  verifyToken(token: string) {
    if (!token || !token.startsWith('Bearer ')) {
      return { valid: false };
    }
    const tokenValue = token.split(' ')[1];
    try {
      const decoded = this.jwtService.verify(tokenValue);
      return { valid: true, user: decoded };
    } catch (error) {
      return { valid: false };
    }
  }
}
