import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUncheckedCreateNestedManyWithoutCharactersInput } from '../staff/staff-unchecked-create-nested-many-without-characters.input';
import { CharacterRole } from '../prisma/character-role.enum';
import { CharacterOnAnimeCreatestaffIdInput } from './character-on-anime-createstaff-id.input';

@InputType()
export class CharacterOnAnimeUncheckedCreateWithoutAnimeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    relationId!: string;

    @Field(() => StaffUncheckedCreateNestedManyWithoutCharactersInput, {nullable:true})
    voiceActors?: StaffUncheckedCreateNestedManyWithoutCharactersInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @Field(() => CharacterOnAnimeCreatestaffIdInput, {nullable:true})
    staffId?: CharacterOnAnimeCreatestaffIdInput;

    @Field(() => String, {nullable:false})
    characterId!: string;
}
