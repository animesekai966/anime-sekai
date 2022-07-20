import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class CharactersOnAnimesCreateManyCharacterInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CharacterRole, {nullable:true})
    role?: keyof typeof CharacterRole;

    @Field(() => String, {nullable:false})
    staffId!: string;

    @Field(() => String, {nullable:false})
    animeId!: string;
}
