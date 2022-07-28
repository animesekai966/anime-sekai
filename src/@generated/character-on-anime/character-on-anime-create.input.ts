import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateNestedOneWithoutCharactersInput } from '../anime/anime-create-nested-one-without-characters.input';
import { StaffCreateNestedOneWithoutCharactersInput } from '../staff/staff-create-nested-one-without-characters.input';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class CharacterOnAnimeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AnimeCreateNestedOneWithoutCharactersInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutCharactersInput;

    @Field(() => StaffCreateNestedOneWithoutCharactersInput, {nullable:false})
    voiceActor!: StaffCreateNestedOneWithoutCharactersInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;
}
