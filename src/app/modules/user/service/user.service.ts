import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenerateException } from 'src/utils/exceptions/generateExceptionError';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../model/dto/create-user.dto';
import { UpdateUserDto } from '../model/dto/update-user.dto';
import { UserEntity } from '../model/entities/user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOneByEmail(email: string) {
    try {
      return this.userRepository.findOne({
        where: { email: email },
      })
    } catch (error) {
      GenerateException(error)
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
