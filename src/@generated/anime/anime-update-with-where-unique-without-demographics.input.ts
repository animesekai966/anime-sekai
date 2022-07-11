import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutDemographicsInput } from './anime-update-without-demographics.input';

@InputType()
export class AnimeUpdateWithWhereUniqueWithoutDemographicsInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutDemographicsInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutDemographicsInput)
    data!: AnimeUpdateWithoutDemographicsInput;
}
