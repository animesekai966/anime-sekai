import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenreType } from '../prisma/genre-type.enum';
import { Anime } from '../anime/anime.model';
import { HideField } from '@nestjs/graphql';
import { GenreCount } from './genre-count.output';

@ObjectType()
export class Genre {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GenreType, {nullable:false,defaultValue:'GENRE'})
    type!: keyof typeof GenreType;

    @Field(() => [Anime], {nullable:true})
    anime?: Array<Anime>;

    @HideField()
    animeIDs!: Array<string>;

    @Field(() => GenreCount, {nullable:false})
    _count?: GenreCount;
}
