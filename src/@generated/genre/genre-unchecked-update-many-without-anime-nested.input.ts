import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutAnimeInput } from './genre-create-without-anime.input';
import { Type } from 'class-transformer';
import { GenreCreateOrConnectWithoutAnimeInput } from './genre-create-or-connect-without-anime.input';
import { GenreUpsertWithWhereUniqueWithoutAnimeInput } from './genre-upsert-with-where-unique-without-anime.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { GenreUpdateWithWhereUniqueWithoutAnimeInput } from './genre-update-with-where-unique-without-anime.input';
import { GenreUpdateManyWithWhereWithoutAnimeInput } from './genre-update-many-with-where-without-anime.input';
import { GenreScalarWhereInput } from './genre-scalar-where.input';

@InputType()
export class GenreUncheckedUpdateManyWithoutAnimeNestedInput {

    @Field(() => [GenreCreateWithoutAnimeInput], {nullable:true})
    @Type(() => GenreCreateWithoutAnimeInput)
    create?: Array<GenreCreateWithoutAnimeInput>;

    @Field(() => [GenreCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => GenreCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<GenreCreateOrConnectWithoutAnimeInput>;

    @Field(() => [GenreUpsertWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => GenreUpsertWithWhereUniqueWithoutAnimeInput)
    upsert?: Array<GenreUpsertWithWhereUniqueWithoutAnimeInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    set?: Array<GenreWhereUniqueInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    disconnect?: Array<GenreWhereUniqueInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    delete?: Array<GenreWhereUniqueInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    connect?: Array<GenreWhereUniqueInput>;

    @Field(() => [GenreUpdateWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => GenreUpdateWithWhereUniqueWithoutAnimeInput)
    update?: Array<GenreUpdateWithWhereUniqueWithoutAnimeInput>;

    @Field(() => [GenreUpdateManyWithWhereWithoutAnimeInput], {nullable:true})
    @Type(() => GenreUpdateManyWithWhereWithoutAnimeInput)
    updateMany?: Array<GenreUpdateManyWithWhereWithoutAnimeInput>;

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    @Type(() => GenreScalarWhereInput)
    deleteMany?: Array<GenreScalarWhereInput>;
}
