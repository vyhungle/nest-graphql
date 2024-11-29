import { InputType, Field } from '@nestjs/graphql';

@InputType() // Định nghĩa một InputType cho GraphQL
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;
}
