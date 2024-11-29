import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async create(entity: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(entity);
    return this.userRepository.save(user);
  }
}
