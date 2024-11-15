import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaInvestimentoDto } from './dto/create-categoria_investimento.dto';
import { UpdateCategoriaInvestimentoDto } from './dto/update-categoria_investimento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaInvestimento } from './entities/categoria_investimento.entity';

@Injectable()
export class CategoriaInvestimentoService {
  constructor(
    @InjectRepository(CategoriaInvestimento)
    private readonly categoriaInvestimentoRepository: Repository<CategoriaInvestimento>,
  ) {}

  async create(data: CreateCategoriaInvestimentoDto) {
    try {
      const createData = this.categoriaInvestimentoRepository.create(data);
      return await this.categoriaInvestimentoRepository.save(createData);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    try {
      return this.categoriaInvestimentoRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findOne(id: number) {
    try {
      return this.categoriaInvestimentoRepository.findOne({
        where: {id}
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: number, data: UpdateCategoriaInvestimentoDto) {
    try {
      const findOne = await this.findOne(id);

      if (!findOne) throw new NotFoundException('categoria do investimento não foi encontrado!');

      const mergeData = this.categoriaInvestimentoRepository.merge(findOne, data);
      return await this.categoriaInvestimentoRepository.save(mergeData);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async remove(id: number) {
    try {
      const findOne = await this.findOne(id);

      if (!findOne) throw new NotFoundException('categoria do investimento não foi encontrado!');

      return await this.categoriaInvestimentoRepository.delete(id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
