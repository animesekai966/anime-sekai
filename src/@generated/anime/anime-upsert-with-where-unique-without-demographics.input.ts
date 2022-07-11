import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutDemographicsInput } from './anime-update-without-demographics.input';
import { AnimeCreateWithoutDemographicsInput } from './anime-create-without-demographics.input';

@InputType()
export class AnimeUpsertWithWhereUniqueWithoutDemographicsInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutDemographicsInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutDemographicsInput)
    update!: AnimeUpdateWithoutDemographicsInput;

    @Field(() => AnimeCreateWithoutDemographicsInput, {nullable:false})
    @Type(() => AnimeCreateWithoutDemographicsInput)
    create!: AnimeCreateWithoutDemographicsInput;
}
