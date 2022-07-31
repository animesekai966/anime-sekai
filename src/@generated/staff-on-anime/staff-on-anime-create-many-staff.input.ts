import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StaffOnAnimeCreateManyStaffInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    relationId!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @HideField()
    animeId!: string;
}
