import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FuzzyDateCreateInput } from './fuzzy-date-create.input';
import { Type } from 'class-transformer';

@InputType()
export class FuzzyDateCreateEnvelopeInput {

    @Field(() => FuzzyDateCreateInput, {nullable:true})
    @Type(() => FuzzyDateCreateInput)
    set?: FuzzyDateCreateInput;
}
