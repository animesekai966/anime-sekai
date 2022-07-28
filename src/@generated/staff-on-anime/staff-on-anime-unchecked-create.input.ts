import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class StaffOnAnimeUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @Field(() => String, {nullable:false})
    animeId!: string;

    @Field(() => String, {nullable:false})
    staffId!: string;
}
