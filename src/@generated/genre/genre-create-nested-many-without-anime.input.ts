import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutAnimeInput } from './genre-create-without-anime.input';
import { Type } from 'class-transformer';
import { GenreCreateOrConnectWithoutAnimeInput } from './genre-create-or-connect-without-anime.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';

@InputType()
export class GenreCreateNestedManyWithoutAnimeInput {

    @Field(() => [GenreCreateWithoutAnimeInput], {nullable:true})
    @Type(() => GenreCreateWithoutAnimeInput)
    create?: Array<GenreCreateWithoutAnimeInput>;

    @Field(() => [GenreCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => GenreCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<GenreCreateOrConnectWithoutAnimeInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    connect?: Array<GenreWhereUniqueInput>;
}
