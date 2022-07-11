import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutDemographicsInput } from './anime-create-without-demographics.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutDemographicsInput } from './anime-create-or-connect-without-demographics.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@InputType()
export class AnimeUncheckedCreateNestedManyWithoutDemographicsInput {

    @Field(() => [AnimeCreateWithoutDemographicsInput], {nullable:true})
    @Type(() => AnimeCreateWithoutDemographicsInput)
    create?: Array<AnimeCreateWithoutDemographicsInput>;

    @Field(() => [AnimeCreateOrConnectWithoutDemographicsInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutDemographicsInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutDemographicsInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: Array<AnimeWhereUniqueInput>;
}
