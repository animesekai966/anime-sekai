import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterName } from '../character-name/character-name.model';
import { Image } from '../image/image.model';
import { Description } from '../description/description.model';

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

    @Field(() => Image, {nullable:false})
    image?: Image;

    @Field(() => Description, {nullable:false})
    description?: Description;
}
