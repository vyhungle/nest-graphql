import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserInput } from './user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getusers(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Query(() => User) // Truy vấn User theo ID
  async getById(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findOne(id);
  }
  @Mutation(() => User) // Tạo mới User
  async createUser(@Args('user') user: CreateUserInput): Promise<User> {
    return this.userService.create(user);
  }
}
