import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutDemographicsInput } from './anime-create-without-demographics.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutDemographicsInput } from './anime-create-or-connect-without-demographics.input';
import { AnimeUpsertWithWhereUniqueWithoutDemographicsInput } from './anime-upsert-with-where-unique-without-demographics.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { AnimeUpdateWithWhereUniqueWithoutDemographicsInput } from './anime-update-with-where-unique-without-demographics.input';
import { AnimeUpdateManyWithWhereWithoutDemographicsInput } from './anime-update-many-with-where-without-demographics.input';
import { AnimeScalarWhereInput } from './anime-scalar-where.input';

@InputType()
export class AnimeUncheckedUpdateManyWithoutDemographicsNestedInput {

    @Field(() => [AnimeCreateWithoutDemographicsInput], {nullable:true})
    @Type(() => AnimeCreateWithoutDemographicsInput)
    create?: Array<AnimeCreateWithoutDemographicsInput>;

    @Field(() => [AnimeCreateOrConnectWithoutDemographicsInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutDemographicsInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutDemographicsInput>;

    @Field(() => [AnimeUpsertWithWhereUniqueWithoutDemographicsInput], {nullable:true})
    @Type(() => AnimeUpsertWithWhereUniqueWithoutDemographicsInput)
    upsert?: Array<AnimeUpsertWithWhereUniqueWithoutDemographicsInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    set?: Array<AnimeWhereUniqueInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    disconnect?: Array<AnimeWhereUniqueInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    delete?: Array<AnimeWhereUniqueInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: Array<AnimeWhereUniqueInput>;

    @Field(() => [AnimeUpdateWithWhereUniqueWithoutDemographicsInput], {nullable:true})
    @Type(() => AnimeUpdateWithWhereUniqueWithoutDemographicsInput)
    update?: Array<AnimeUpdateWithWhereUniqueWithoutDemographicsInput>;

    @Field(() => [AnimeUpdateManyWithWhereWithoutDemographicsInput], {nullable:true})
    @Type(() => AnimeUpdateManyWithWhereWithoutDemographicsInput)
    updateMany?: Array<AnimeUpdateManyWithWhereWithoutDemographicsInput>;

    @Field(() => [AnimeScalarWhereInput], {nullable:true})
    @Type(() => AnimeScalarWhereInput)
    deleteMany?: Array<AnimeScalarWhereInput>;
}
