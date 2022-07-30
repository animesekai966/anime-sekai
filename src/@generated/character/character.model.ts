import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterName } from '../character-name/character-name.model';
import { Image } from '../image/image.model';
import { Description } from '../description/description.model';
import { CharacterOnAnime } from '../character-on-anime/character-on-anime.model';
import { CharacterCount } from './character-count.output';

@ObjectType()
export class Character {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => CharacterName, {nullable:false})
    name?: CharacterName;

    @Field(() => Image, {nullable:false})
    image?: Image;

    @Field(() => Description, {nullable:false})
    description?: Description;

    @Field(() => [CharacterOnAnime], {nullable:true})
    anime?: Array<CharacterOnAnime>;

    @Field(() => CharacterCount, {nullable:false})
    _count?: CharacterCount;
}
