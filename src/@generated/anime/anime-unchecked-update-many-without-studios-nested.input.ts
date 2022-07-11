import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutStudiosInput } from './anime-create-without-studios.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutStudiosInput } from './anime-create-or-connect-without-studios.input';
import { AnimeUpsertWithWhereUniqueWithoutStudiosInput } from './anime-upsert-with-where-unique-without-studios.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { AnimeUpdateWithWhereUniqueWithoutStudiosInput } from './anime-update-with-where-unique-without-studios.input';
import { AnimeUpdateManyWithWhereWithoutStudiosInput } from './anime-update-many-with-where-without-studios.input';
import { AnimeScalarWhereInput } from './anime-scalar-where.input';

@InputType()
export class AnimeUncheckedUpdateManyWithoutStudiosNestedInput {

    @Field(() => [AnimeCreateWithoutStudiosInput], {nullable:true})
    @Type(() => AnimeCreateWithoutStudiosInput)
    create?: Array<AnimeCreateWithoutStudiosInput>;

    @Field(() => [AnimeCreateOrConnectWithoutStudiosInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutStudiosInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutStudiosInput>;

    @Field(() => [AnimeUpsertWithWhereUniqueWithoutStudiosInput], {nullable:true})
    @Type(() => AnimeUpsertWithWhereUniqueWithoutStudiosInput)
    upsert?: Array<AnimeUpsertWithWhereUniqueWithoutStudiosInput>;

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

    @Field(() => [AnimeUpdateWithWhereUniqueWithoutStudiosInput], {nullable:true})
    @Type(() => AnimeUpdateWithWhereUniqueWithoutStudiosInput)
    update?: Array<AnimeUpdateWithWhereUniqueWithoutStudiosInput>;

    @Field(() => [AnimeUpdateManyWithWhereWithoutStudiosInput], {nullable:true})
    @Type(() => AnimeUpdateManyWithWhereWithoutStudiosInput)
    updateMany?: Array<AnimeUpdateManyWithWhereWithoutStudiosInput>;

    @Field(() => [AnimeScalarWhereInput], {nullable:true})
    @Type(() => AnimeScalarWhereInput)
    deleteMany?: Array<AnimeScalarWhereInput>;
}
