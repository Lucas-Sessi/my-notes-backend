import { Request } from 'express';
import { UsuarioEntity } from 'src/app/dbacesso/usuario/model/entities/usuario.entity';

export class AuthRequest extends Request {
  user: UsuarioEntity;
}
