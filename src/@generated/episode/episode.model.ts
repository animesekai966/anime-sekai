import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Anime } from '../anime/anime.model';
import { Float } from '@nestjs/graphql';
import { Server } from '../server/server.model';
import { AnimeSources } from '../prisma/anime-sources.enum';
import { EpisodeLanguage } from '../prisma/episode-language.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class Episode {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Anime, {nullable:false})
    anime?: Anime;

    @Field(() => Float, {nullable:false})
    number!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Server], {nullable:true})
    servers?: Array<Server>;

    @Field(() => AnimeSources, {nullable:false,defaultValue:'ANIME_BLKOM'})
    source!: keyof typeof AnimeSources;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    filler!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    last!: boolean;

    @Field(() => EpisodeLanguage, {nullable:false,defaultValue:'AR'})
    language!: keyof typeof EpisodeLanguage;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @HideField()
    animeId!: string;
}
