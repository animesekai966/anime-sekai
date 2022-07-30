import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateNestedManyWithoutCharactersInput } from '../staff/staff-create-nested-many-without-characters.input';
import { CharacterCreateNestedOneWithoutAnimeInput } from '../character/character-create-nested-one-without-anime.input';
import { CharacterRole } from '../prisma/character-role.enum';
import { CharacterOnAnimeCreatestaffIdInput } from './character-on-anime-createstaff-id.input';

@InputType()
export class CharacterOnAnimeCreateWithoutAnimeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    relationId!: string;

    @Field(() => StaffCreateNestedManyWithoutCharactersInput, {nullable:true})
    voiceActors?: StaffCreateNestedManyWithoutCharactersInput;

    @Field(() => CharacterCreateNestedOneWithoutAnimeInput, {nullable:false})
    character!: CharacterCreateNestedOneWithoutAnimeInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @Field(() => CharacterOnAnimeCreatestaffIdInput, {nullable:true})
    staffId?: CharacterOnAnimeCreatestaffIdInput;
}
