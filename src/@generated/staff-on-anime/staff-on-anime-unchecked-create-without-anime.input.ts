import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StaffOnAnimeUncheckedCreateWithoutAnimeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    relationId!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @HideField()
    staffId!: string;
}
