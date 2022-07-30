import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateNestedOneWithoutStaffInput } from '../anime/anime-create-nested-one-without-staff.input';

@InputType()
export class StaffOnAnimeCreateWithoutStaffInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    relationId!: string;

    @Field(() => AnimeCreateNestedOneWithoutStaffInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutStaffInput;

    @Field(() => String, {nullable:false})
    role!: string;
}
