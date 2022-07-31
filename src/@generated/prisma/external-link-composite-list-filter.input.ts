import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkObjectEqualityInput } from './external-link-object-equality.input';
import { ExternalLinkWhereInput } from '../external-link/external-link-where.input';

@InputType()
export class ExternalLinkCompositeListFilter {

    @Field(() => [ExternalLinkObjectEqualityInput], {nullable:true})
    equals?: Array<ExternalLinkObjectEqualityInput>;

    @Field(() => ExternalLinkWhereInput, {nullable:true})
    every?: ExternalLinkWhereInput;

    @Field(() => ExternalLinkWhereInput, {nullable:true})
    some?: ExternalLinkWhereInput;

    @Field(() => ExternalLinkWhereInput, {nullable:true})
    none?: ExternalLinkWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
