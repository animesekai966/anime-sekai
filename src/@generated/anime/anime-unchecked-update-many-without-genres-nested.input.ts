import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutGenresInput } from './anime-create-without-genres.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutGenresInput } from './anime-create-or-connect-without-genres.input';
import { AnimeUpsertWithWhereUniqueWithoutGenresInput } from './anime-upsert-with-where-unique-without-genres.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { AnimeUpdateWithWhereUniqueWithoutGenresInput } from './anime-update-with-where-unique-without-genres.input';
import { AnimeUpdateManyWithWhereWithoutGenresInput } from './anime-update-many-with-where-without-genres.input';
import { AnimeScalarWhereInput } from './anime-scalar-where.input';

@InputType()
export class AnimeUncheckedUpdateManyWithoutGenresNestedInput {

    @Field(() => [AnimeCreateWithoutGenresInput], {nullable:true})
    @Type(() => AnimeCreateWithoutGenresInput)
    create?: Array<AnimeCreateWithoutGenresInput>;

    @Field(() => [AnimeCreateOrConnectWithoutGenresInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutGenresInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutGenresInput>;

    @Field(() => [AnimeUpsertWithWhereUniqueWithoutGenresInput], {nullable:true})
    @Type(() => AnimeUpsertWithWhereUniqueWithoutGenresInput)
    upsert?: Array<AnimeUpsertWithWhereUniqueWithoutGenresInput>;

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

    @Field(() => [AnimeUpdateWithWhereUniqueWithoutGenresInput], {nullable:true})
    @Type(() => AnimeUpdateWithWhereUniqueWithoutGenresInput)
    update?: Array<AnimeUpdateWithWhereUniqueWithoutGenresInput>;

    @Field(() => [AnimeUpdateManyWithWhereWithoutGenresInput], {nullable:true})
    @Type(() => AnimeUpdateManyWithWhereWithoutGenresInput)
    updateMany?: Array<AnimeUpdateManyWithWhereWithoutGenresInput>;

    @Field(() => [AnimeScalarWhereInput], {nullable:true})
    @Type(() => AnimeScalarWhereInput)
    deleteMany?: Array<AnimeScalarWhereInput>;
}
