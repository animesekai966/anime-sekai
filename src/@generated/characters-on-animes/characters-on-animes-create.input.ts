import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';
import { CharacterCreateNestedOneWithoutAnimesInput } from '../character/character-create-nested-one-without-animes.input';
import { StaffCreateNestedOneWithoutAnimesInput } from '../staff/staff-create-nested-one-without-animes.input';
import { AnimeCreateNestedOneWithoutCharactersInput } from '../anime/anime-create-nested-one-without-characters.input';

@InputType()
export class CharactersOnAnimesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CharacterRole, {nullable:true})
    role?: keyof typeof CharacterRole;

    @Field(() => CharacterCreateNestedOneWithoutAnimesInput, {nullable:false})
    character!: CharacterCreateNestedOneWithoutAnimesInput;

    @Field(() => StaffCreateNestedOneWithoutAnimesInput, {nullable:false})
    staff!: StaffCreateNestedOneWithoutAnimesInput;

    @Field(() => AnimeCreateNestedOneWithoutCharactersInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutCharactersInput;
}
