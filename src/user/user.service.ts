import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

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
}
