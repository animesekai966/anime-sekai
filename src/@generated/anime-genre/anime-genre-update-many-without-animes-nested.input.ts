import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreCreateWithoutAnimesInput } from './anime-genre-create-without-animes.input';
import { Type } from 'class-transformer';
import { AnimeGenreCreateOrConnectWithoutAnimesInput } from './anime-genre-create-or-connect-without-animes.input';
import { AnimeGenreUpsertWithWhereUniqueWithoutAnimesInput } from './anime-genre-upsert-with-where-unique-without-animes.input';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';
import { AnimeGenreUpdateWithWhereUniqueWithoutAnimesInput } from './anime-genre-update-with-where-unique-without-animes.input';
import { AnimeGenreUpdateManyWithWhereWithoutAnimesInput } from './anime-genre-update-many-with-where-without-animes.input';
import { AnimeGenreScalarWhereInput } from './anime-genre-scalar-where.input';

@InputType()
export class AnimeGenreUpdateManyWithoutAnimesNestedInput {

    @Field(() => [AnimeGenreCreateWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeGenreCreateWithoutAnimesInput)
    create?: Array<AnimeGenreCreateWithoutAnimesInput>;

    @Field(() => [AnimeGenreCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeGenreCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<AnimeGenreCreateOrConnectWithoutAnimesInput>;

    @Field(() => [AnimeGenreUpsertWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeGenreUpsertWithWhereUniqueWithoutAnimesInput)
    upsert?: Array<AnimeGenreUpsertWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [AnimeGenreWhereUniqueInput], {nullable:true})
    @Type(() => AnimeGenreWhereUniqueInput)
    set?: Array<AnimeGenreWhereUniqueInput>;

    @Field(() => [AnimeGenreWhereUniqueInput], {nullable:true})
    @Type(() => AnimeGenreWhereUniqueInput)
    disconnect?: Array<AnimeGenreWhereUniqueInput>;

    @Field(() => [AnimeGenreWhereUniqueInput], {nullable:true})
    @Type(() => AnimeGenreWhereUniqueInput)
    delete?: Array<AnimeGenreWhereUniqueInput>;

    @Field(() => [AnimeGenreWhereUniqueInput], {nullable:true})
    @Type(() => AnimeGenreWhereUniqueInput)
    connect?: Array<AnimeGenreWhereUniqueInput>;

    @Field(() => [AnimeGenreUpdateWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeGenreUpdateWithWhereUniqueWithoutAnimesInput)
    update?: Array<AnimeGenreUpdateWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [AnimeGenreUpdateManyWithWhereWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeGenreUpdateManyWithWhereWithoutAnimesInput)
    updateMany?: Array<AnimeGenreUpdateManyWithWhereWithoutAnimesInput>;

    @Field(() => [AnimeGenreScalarWhereInput], {nullable:true})
    @Type(() => AnimeGenreScalarWhereInput)
    deleteMany?: Array<AnimeGenreScalarWhereInput>;
}
