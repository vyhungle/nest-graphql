import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SampleType } from './sample.type';
import { CreateSampleInput } from './dto/create-sample.input';

@Resolver()
export class SampleResolver {
  private samples: SampleType[] = []; // Bộ nhớ tạm để lưu mẫu dữ liệu

  @Query(() => [SampleType])
  getSamples(): SampleType[] {
    return this.samples;
  }

  @Mutation(() => SampleType)
  createSample(
    @Args('createSampleInput') createSampleInput: CreateSampleInput,
  ): SampleType {
    const newSample = {
      id: this.samples.length + 1,
      ...createSampleInput,
    };
    this.samples.push(newSample);
    return newSample;
  }
}
