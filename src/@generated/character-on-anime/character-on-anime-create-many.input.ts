import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';
import { CharacterOnAnimeCreatestaffIdInput } from './character-on-anime-createstaff-id.input';

@InputType()
export class CharacterOnAnimeCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    relationId!: string;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @HideField()
    animeId!: string;

    @HideField()
    staffId?: CharacterOnAnimeCreatestaffIdInput;

    @HideField()
    characterId!: string;
}
