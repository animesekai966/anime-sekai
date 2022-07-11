import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreCreateWithoutAnimesInput } from './anime-genre-create-without-animes.input';
import { Type } from 'class-transformer';
import { AnimeGenreCreateOrConnectWithoutAnimesInput } from './anime-genre-create-or-connect-without-animes.input';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';

@InputType()
export class AnimeGenreCreateNestedManyWithoutAnimesInput {

    @Field(() => [AnimeGenreCreateWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeGenreCreateWithoutAnimesInput)
    create?: Array<AnimeGenreCreateWithoutAnimesInput>;

    @Field(() => [AnimeGenreCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeGenreCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<AnimeGenreCreateOrConnectWithoutAnimesInput>;

    @Field(() => [AnimeGenreWhereUniqueInput], {nullable:true})
    @Type(() => AnimeGenreWhereUniqueInput)
    connect?: Array<AnimeGenreWhereUniqueInput>;
}
