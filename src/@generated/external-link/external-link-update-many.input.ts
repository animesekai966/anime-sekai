import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkWhereInput } from './external-link-where.input';
import { Type } from 'class-transformer';
import { ExternalLinkUpdateInput } from './external-link-update.input';

@InputType()
export class ExternalLinkUpdateManyInput {

    @Field(() => ExternalLinkWhereInput, {nullable:false})
    @Type(() => ExternalLinkWhereInput)
    where!: ExternalLinkWhereInput;

    @Field(() => ExternalLinkUpdateInput, {nullable:false})
    @Type(() => ExternalLinkUpdateInput)
    data!: ExternalLinkUpdateInput;
}
