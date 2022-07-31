import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AnimeCreateNestedOneWithoutCharactersInput } from '../anime/anime-create-nested-one-without-characters.input';
import { StaffCreateNestedManyWithoutCharactersInput } from '../staff/staff-create-nested-many-without-characters.input';
import { CharacterRole } from '../prisma/character-role.enum';
import { CharacterOnAnimeCreatestaffIdInput } from './character-on-anime-createstaff-id.input';

@InputType()
export class CharacterOnAnimeCreateWithoutCharacterInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    relationId!: string;

    @Field(() => AnimeCreateNestedOneWithoutCharactersInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutCharactersInput;

    @Field(() => StaffCreateNestedManyWithoutCharactersInput, {nullable:true})
    voiceActors?: StaffCreateNestedManyWithoutCharactersInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @HideField()
    staffId?: CharacterOnAnimeCreatestaffIdInput;
}
