import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';

@ObjectType()
export class CharacterOnAnimeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    relationId?: string;

    @Field(() => CharacterRole, {nullable:true})
    role?: keyof typeof CharacterRole;

    @Field(() => String, {nullable:true})
    animeId?: string;

    @Field(() => String, {nullable:true})
    characterId?: string;
}