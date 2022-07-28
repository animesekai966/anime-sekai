import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateNestedOneWithoutCharactersInput } from '../staff/staff-create-nested-one-without-characters.input';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class CharacterOnAnimeCreateWithoutAnimeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => StaffCreateNestedOneWithoutCharactersInput, {nullable:false})
    voiceActor!: StaffCreateNestedOneWithoutCharactersInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;
}
