import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StaffOnAnimeCreateManyAnimeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    relationId!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => String, {nullable:false})
    staffId!: string;
}
