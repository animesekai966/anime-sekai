import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FuzzyDateCreateInput } from './fuzzy-date-create.input';
import { Type } from 'class-transformer';
import { FuzzyDateUpdateInput } from './fuzzy-date-update.input';

@InputType()
export class FuzzyDateUpdateEnvelopeInput {

    @Field(() => FuzzyDateCreateInput, {nullable:true})
    @Type(() => FuzzyDateCreateInput)
    set?: FuzzyDateCreateInput;

    @Field(() => FuzzyDateUpdateInput, {nullable:true})
    @Type(() => FuzzyDateUpdateInput)
    update?: FuzzyDateUpdateInput;
}
