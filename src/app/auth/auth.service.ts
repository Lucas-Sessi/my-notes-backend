import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { userPayload } from './models/userPayload';
import { UsuarioEntity } from '../dbacesso/usuario/model/entities/usuario.entity';
import { UsuarioService } from '../dbacesso/usuario/service/usuario.service';
import { UsuarioSistemaService } from '../dbacesso/usuario_sistema/service/usuario_sistema.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly usuarioSistemaService: UsuarioSistemaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  login(user: UsuarioEntity): UserToken {
    const payload: userPayload = {
      sub: Number(user.usua_id),
      usua_nome: user.usua_nome,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(usua_login: string, usua_senha: string) {
    const user = await this.usuarioService.findOneByUserLogin(usua_login);
    await this.validatePermissionUser(user.usua_id);

    if (user.usua_senha !== usua_senha)
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

  private async validatePermissionUser(idUser: number) {
    const idSystem = this.configService.get<number>('ID_SISTEMA');

    const userPermissionVerify =
      await this.usuarioSistemaService.findOneByUserAndSystem(idUser, idSystem);

    if (!userPermissionVerify)
      throw new HttpException(
        'Você não tem permissão para acessar o sistema!',
        HttpStatus.UNAUTHORIZED,
      );

    return userPermissionVerify;
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
