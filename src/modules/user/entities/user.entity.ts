import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // Đánh dấu lớp này là một GraphQL ObjectType
@Entity('users')
export class User {
  @Field(() => Int) // Chỉ định kiểu dữ liệu trả về cho GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  // email
  @Field()
  @Column({ nullable: true, type: 'text', default: '' })
  email!: string;

  @Field()
  @Column({ nullable: true, type: 'text', default: '' })
  fullName!: string;
}
