import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FuzzyDate {

    @Field(() => Int, {nullable:true})
    year!: number | null;

    @Field(() => Int, {nullable:true})
    month!: number | null;

    @Field(() => Int, {nullable:true})
    day!: number | null;
}
