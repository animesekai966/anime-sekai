import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FuzzyDateCreateInput {

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:true})
    month?: number;

    @Field(() => Int, {nullable:true})
    day?: number;
}
