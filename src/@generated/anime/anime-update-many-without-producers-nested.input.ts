import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutProducersInput } from './anime-create-without-producers.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutProducersInput } from './anime-create-or-connect-without-producers.input';
import { AnimeUpsertWithWhereUniqueWithoutProducersInput } from './anime-upsert-with-where-unique-without-producers.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { AnimeUpdateWithWhereUniqueWithoutProducersInput } from './anime-update-with-where-unique-without-producers.input';
import { AnimeUpdateManyWithWhereWithoutProducersInput } from './anime-update-many-with-where-without-producers.input';
import { AnimeScalarWhereInput } from './anime-scalar-where.input';

@InputType()
export class AnimeUpdateManyWithoutProducersNestedInput {

    @Field(() => [AnimeCreateWithoutProducersInput], {nullable:true})
    @Type(() => AnimeCreateWithoutProducersInput)
    create?: Array<AnimeCreateWithoutProducersInput>;

    @Field(() => [AnimeCreateOrConnectWithoutProducersInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutProducersInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutProducersInput>;

    @Field(() => [AnimeUpsertWithWhereUniqueWithoutProducersInput], {nullable:true})
    @Type(() => AnimeUpsertWithWhereUniqueWithoutProducersInput)
    upsert?: Array<AnimeUpsertWithWhereUniqueWithoutProducersInput>;

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

    @Field(() => [AnimeUpdateWithWhereUniqueWithoutProducersInput], {nullable:true})
    @Type(() => AnimeUpdateWithWhereUniqueWithoutProducersInput)
    update?: Array<AnimeUpdateWithWhereUniqueWithoutProducersInput>;

    @Field(() => [AnimeUpdateManyWithWhereWithoutProducersInput], {nullable:true})
    @Type(() => AnimeUpdateManyWithWhereWithoutProducersInput)
    updateMany?: Array<AnimeUpdateManyWithWhereWithoutProducersInput>;

    @Field(() => [AnimeScalarWhereInput], {nullable:true})
    @Type(() => AnimeScalarWhereInput)
    deleteMany?: Array<AnimeScalarWhereInput>;
}
