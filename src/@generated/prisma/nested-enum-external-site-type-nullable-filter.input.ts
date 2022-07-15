import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalSiteType } from './external-site-type.enum';

@InputType()
export class NestedEnumExternalSiteTypeNullableFilter {

    @Field(() => ExternalSiteType, {nullable:true})
    equals?: keyof typeof ExternalSiteType;

    @Field(() => [ExternalSiteType], {nullable:true})
    in?: Array<keyof typeof ExternalSiteType>;

    @Field(() => [ExternalSiteType], {nullable:true})
    notIn?: Array<keyof typeof ExternalSiteType>;

    @Field(() => NestedEnumExternalSiteTypeNullableFilter, {nullable:true})
    not?: NestedEnumExternalSiteTypeNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
