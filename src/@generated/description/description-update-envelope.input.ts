import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DescriptionCreateInput } from './description-create.input';
import { Type } from 'class-transformer';
import { DescriptionUpdateInput } from './description-update.input';

@InputType()
export class DescriptionUpdateEnvelopeInput {

    @Field(() => DescriptionCreateInput, {nullable:true})
    @Type(() => DescriptionCreateInput)
    set?: DescriptionCreateInput;

    @Field(() => DescriptionUpdateInput, {nullable:true})
    @Type(() => DescriptionUpdateInput)
    update?: DescriptionUpdateInput;
}
