import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAtivoUsuarioDto } from './dto/create-ativo_usuario.dto';
import { UpdateAtivoUsuarioDto } from './dto/update-ativo_usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtivoUsuario } from './entities/ativo_usuario.entity';
import { UserEntity } from '../user/model/entities/user.entity';
import { AtivoInvestimento } from '../ativo_investimento/entities/ativo_investimento.entity';

@Injectable()
export class AtivoUsuarioService {
  constructor(
    @InjectRepository(AtivoUsuario)
    private readonly ativoUsuarioRepository: Repository<AtivoUsuario>,
  ) {}

  async create(data: CreateAtivoUsuarioDto) {
    try {
      const createData = this.ativoUsuarioRepository.create(data);
      return await this.ativoUsuarioRepository.save(createData);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll(idUser: number) {
    try {
      const sql = `
        select
          u.nome,
          u.sobrenome,
          ci.desc_categoria,
          ai.desc_ativo,
          au.qtd_cateira,
	        au.preco_medio,
          au.nota_ativo
        from ativo_usuario au
        join usuario u on au.id_usuario = u.id
        join ativo_investimento ai on au.id_ativo = ai.id
        join categoria_investimento ci on ai.id_categoria = ci.id 
        where au.id_usuario = ${idUser}
      `;
      return this.ativoUsuarioRepository.query(sql);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findOne(id: number) {
    try {
      return this.ativoUsuarioRepository.findOne({
        where: {id}
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, data: UpdateAtivoUsuarioDto) {
    try {
      const findOne = await this.findOne(id);

      if (!findOne) throw new NotFoundException('Ativo do usuário não encontrado!')

      const mergeData = this.ativoUsuarioRepository.merge(findOne, data);

      return await this.ativoUsuarioRepository.save(mergeData);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async remove(id: number) {
    try {
      const findOne = await this.findOne(id);

      if (!findOne) throw new NotFoundException('Ativo do usuário não encontrado!')

      return await this.ativoUsuarioRepository.delete(id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
