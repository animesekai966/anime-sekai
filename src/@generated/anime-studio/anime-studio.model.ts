import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeStudioType } from '../prisma/anime-studio-type.enum';
import { Anime } from '../anime/anime.model';
import { AnimeStudioCount } from '../anime/anime-studio-count.output';

@ObjectType()
export class AnimeStudio {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => AnimeStudioType, {nullable:false,defaultValue:'STUDIO'})
    type!: keyof typeof AnimeStudioType;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [String], {nullable:true})
    animeIDs!: Array<string>;

    @Field(() => [Anime], {nullable:true})
    animes?: Array<Anime>;

    @Field(() => AnimeStudioCount, {nullable:false})
    _count?: AnimeStudioCount;
}
