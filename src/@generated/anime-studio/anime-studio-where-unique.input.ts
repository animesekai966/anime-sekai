import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AnimeStudioWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => String, {nullable:true})
    name?: string;
}
