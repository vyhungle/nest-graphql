import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSampleInput {
  @Field()
  message: string;
}
