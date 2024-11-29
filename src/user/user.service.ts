import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private sampleRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.sampleRepository.find();
  }
  async findOne(id: number): Promise<User> {
    return this.sampleRepository.findOneBy({ id });
  }

  async create(entity: CreateUserInput): Promise<User> {
    const user = this.sampleRepository.create(entity);
    return this.sampleRepository.save(user);
  }
}
