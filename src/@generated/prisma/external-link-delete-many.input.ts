import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkWhereInput } from '../external-link/external-link-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ExternalLinkDeleteManyInput {

    @Field(() => ExternalLinkWhereInput, {nullable:false})
    @Type(() => ExternalLinkWhereInput)
    where!: ExternalLinkWhereInput;
}
