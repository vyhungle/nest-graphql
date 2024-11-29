import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/entities/user.entity';
import { UserResolver } from './modules/user/user.resolver';
import { UserService } from './modules/user/user.service';
import { databaseConfig } from './config/database.config';
import { UserModule } from './modules/user/user.module';
import { ProductResolver } from './modules/product/product.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql', // Tự động tạo schema
    }),
    UserModule,
  ],
})
export class AppModule {}
