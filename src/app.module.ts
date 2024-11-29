import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SampleResolver } from './sample/sample.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // Tự động tạo schema
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-snowy-truth-a12mkumn.ap-southeast-1.aws.neon.tech', // Địa chỉ host PostgreSQL
      port: 5432, // Cổng PostgreSQL
      username: 'neondb_owner', // Tên đăng nhập PostgreSQL
      password: 'cwRKkI2qeLT4', // Mật khẩu PostgreSQL
      database: 'neondb', // Tên cơ sở dữ liệu
      autoLoadEntities: true, // Tự động load các entity
      synchronize: true, // Tự động đồng bộ bảng (Chỉ dùng trong phát triển)
      ssl: true, // Sử dụng SSL
    }),

    TypeOrmModule.forFeature([User]),
  ],
  providers: [SampleResolver, UserResolver, UserService],
})
export class AppModule {}
