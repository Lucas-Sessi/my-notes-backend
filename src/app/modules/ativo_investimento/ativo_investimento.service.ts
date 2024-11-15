import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAtivoInvestimentoDto } from './dto/create-ativo_investimento.dto';
import { UpdateAtivoInvestimentoDto } from './dto/update-ativo_investimento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AtivoInvestimento } from './entities/ativo_investimento.entity';

@Injectable()
export class AtivoInvestimentoService {
  constructor(
    @InjectRepository(AtivoInvestimento)
    private readonly ativoInvestimentoRepository: Repository<AtivoInvestimento>,
  ) {}
  
  async create(data: CreateAtivoInvestimentoDto) {
    try {
      const createData = this.ativoInvestimentoRepository.create(data);
      return await this.ativoInvestimentoRepository.save(createData)
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  findAll() {
    try {
      return this.ativoInvestimentoRepository.find();
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  findOne(id: number) {
    try {
      return this.ativoInvestimentoRepository.findOne({
        where: {id}
      });
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async update(id: number, data: UpdateAtivoInvestimentoDto) {
    try {
      const findOne = await this.findOne(id);

      if (!findOne) throw new NotFoundException('Ativo não encontrado!');

      const mergeData = this.ativoInvestimentoRepository.merge(findOne, data);

      return await this.ativoInvestimentoRepository.save(mergeData);
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async remove(id: number) {
    try {
      const findOne = await this.findOne(id);

      if (!findOne) throw new NotFoundException('Ativo não encontrado!');

      return await this.ativoInvestimentoRepository.delete(id);
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }
}
