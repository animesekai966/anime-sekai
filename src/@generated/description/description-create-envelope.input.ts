import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DescriptionCreateInput } from './description-create.input';
import { Type } from 'class-transformer';

@InputType()
export class DescriptionCreateEnvelopeInput {

    @Field(() => DescriptionCreateInput, {nullable:true})
    @Type(() => DescriptionCreateInput)
    set?: DescriptionCreateInput;
}
