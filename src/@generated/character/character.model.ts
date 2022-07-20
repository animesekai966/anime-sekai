import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterName } from '../character-name/character-name.model';
import { CharacterImage } from '../character-image/character-image.model';
import { FuzzyDate } from '../fuzzy-date/fuzzy-date.model';
import { CharactersOnAnimes } from '../characters-on-animes/characters-on-animes.model';
import { CharacterCount } from './character-count.output';

@ObjectType()
export class Character {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    malId!: number | null;

    @Field(() => Int, {nullable:true})
    anilistId!: number | null;

    @Field(() => CharacterName, {nullable:false})
    name?: CharacterName;

    @Field(() => CharacterImage, {nullable:false})
    image?: CharacterImage;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    age!: string | null;

    @Field(() => String, {nullable:true})
    gender!: string | null;

    @Field(() => String, {nullable:true})
    bloodType!: string | null;

    @Field(() => FuzzyDate, {nullable:false})
    dateOfBirth?: FuzzyDate;

    @Field(() => [CharactersOnAnimes], {nullable:true})
    animes?: Array<CharactersOnAnimes>;

    @Field(() => CharacterCount, {nullable:false})
    _count?: CharacterCount;
}
