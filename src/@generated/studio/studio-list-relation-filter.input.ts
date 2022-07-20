import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereInput } from './studio-where.input';

@InputType()
export class StudioListRelationFilter {

    @Field(() => StudioWhereInput, {nullable:true})
    every?: StudioWhereInput;

    @Field(() => StudioWhereInput, {nullable:true})
    some?: StudioWhereInput;

    @Field(() => StudioWhereInput, {nullable:true})
    none?: StudioWhereInput;
}
