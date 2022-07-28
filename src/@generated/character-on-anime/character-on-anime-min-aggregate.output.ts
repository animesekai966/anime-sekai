import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';

@ObjectType()
export class CharacterOnAnimeMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CharacterRole, {nullable:true})
    role?: keyof typeof CharacterRole;

    @Field(() => String, {nullable:true})
    animeId?: string;

    @Field(() => String, {nullable:true})
    staffId?: string;
}
