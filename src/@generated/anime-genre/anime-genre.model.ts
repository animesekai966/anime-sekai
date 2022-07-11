import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Anime } from '../anime/anime.model';
import { AnimeGenreCount } from './anime-genre-count.output';

@ObjectType()
export class AnimeGenre {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [String], {nullable:true})
    animeIDs!: Array<string>;

    @Field(() => [Anime], {nullable:true})
    animes?: Array<Anime>;

    @Field(() => AnimeGenreCount, {nullable:false})
    _count?: AnimeGenreCount;
}
