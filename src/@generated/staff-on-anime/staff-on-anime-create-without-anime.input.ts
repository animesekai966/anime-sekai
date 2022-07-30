import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateNestedOneWithoutAnimeRolesInput } from '../staff/staff-create-nested-one-without-anime-roles.input';

@InputType()
export class StaffOnAnimeCreateWithoutAnimeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    relationId!: string;

    @Field(() => StaffCreateNestedOneWithoutAnimeRolesInput, {nullable:false})
    staff!: StaffCreateNestedOneWithoutAnimeRolesInput;

    @Field(() => String, {nullable:false})
    role!: string;
}
