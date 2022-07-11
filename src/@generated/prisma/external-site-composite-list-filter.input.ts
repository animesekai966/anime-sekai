import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalSiteObjectEqualityInput } from './external-site-object-equality.input';
import { ExternalSiteWhereInput } from '../external-site/external-site-where.input';

@InputType()
export class ExternalSiteCompositeListFilter {

    @Field(() => [ExternalSiteObjectEqualityInput], {nullable:true})
    equals?: Array<ExternalSiteObjectEqualityInput>;

    @Field(() => ExternalSiteWhereInput, {nullable:true})
    every?: ExternalSiteWhereInput;

    @Field(() => ExternalSiteWhereInput, {nullable:true})
    some?: ExternalSiteWhereInput;

    @Field(() => ExternalSiteWhereInput, {nullable:true})
    none?: ExternalSiteWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
