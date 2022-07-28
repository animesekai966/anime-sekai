import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateNestedOneWithoutStaffInput } from '../anime/anime-create-nested-one-without-staff.input';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class StaffOnAnimeCreateWithoutStaffInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AnimeCreateNestedOneWithoutStaffInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutStaffInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;
}
