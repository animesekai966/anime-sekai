import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';

@ObjectType()
export class CharacterOnAnimeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    relationId?: string;

    @Field(() => CharacterRole, {nullable:true})
    role?: keyof typeof CharacterRole;

    @HideField()
    animeId?: string;

    @HideField()
    characterId?: string;
}
