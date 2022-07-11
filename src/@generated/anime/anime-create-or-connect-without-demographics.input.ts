import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutDemographicsInput } from './anime-create-without-demographics.input';

@InputType()
export class AnimeCreateOrConnectWithoutDemographicsInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeCreateWithoutDemographicsInput, {nullable:false})
    @Type(() => AnimeCreateWithoutDemographicsInput)
    create!: AnimeCreateWithoutDemographicsInput;
}
