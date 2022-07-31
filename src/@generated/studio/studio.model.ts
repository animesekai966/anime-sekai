import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Anime } from '../anime/anime.model';
import { HideField } from '@nestjs/graphql';
import { StudioCount } from './studio-count.output';

@ObjectType()
export class Studio {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Anime], {nullable:true})
    animatedAnime?: Array<Anime>;

    @Field(() => [Anime], {nullable:true})
    producedAnime?: Array<Anime>;

    @HideField()
    animatedAnimeIDs!: Array<string>;

    @HideField()
    producedAnimeIDs!: Array<string>;

    @Field(() => StudioCount, {nullable:false})
    _count?: StudioCount;
}
