import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaUsuarioDto } from './dto/create-categoria_usuario.dto';
import { UpdateCategoriaUsuarioDto } from './dto/update-categoria_usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaUsuario } from './entities/categoria_usuario.entity';

@Injectable()
export class CategoriaUsuarioService {
  constructor(
    @InjectRepository(CategoriaUsuario)
    private readonly categoriaUsuarioRepository: Repository<CategoriaUsuario>,
  ) {}

  async create(data: CreateCategoriaUsuarioDto) {
    try {
      const createData = this.categoriaUsuarioRepository.create(data);
      return await this.categoriaUsuarioRepository.save(createData);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    try {
      return this.categoriaUsuarioRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findOne(id: number) {
    try {
      return this.categoriaUsuarioRepository.findOne({
        where: {id}
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, data: UpdateCategoriaUsuarioDto) {
    try {
      const findOne = await this.findOne(id);

      if (!findOne) throw new NotFoundException('categoria do usaurio não foi encontrado!');

      const mergeData = this.categoriaUsuarioRepository.merge(findOne, data);
      return await this.categoriaUsuarioRepository.save(mergeData);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async remove(id: number) {
    try {
      const findOne = await this.findOne(id);

      if (!findOne) throw new NotFoundException('categoria do usaurio não foi encontrado!');

      return await this.categoriaUsuarioRepository.delete(id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
