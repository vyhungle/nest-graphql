import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Đăng ký entity User cho TypeORM
  ],
  providers: [
    UserResolver, // Resolver cho GraphQL
    UserService, // Service xử lý nghiệp vụ
  ],
  exports: [UserService], // Xuất service để sử dụng trong các module khác (nếu cần)
})
export class UserModule {}
