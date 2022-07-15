import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumExternalSiteTypeNullableFilter } from '../prisma/enum-external-site-type-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ExternalSiteWhereInput {

    @Field(() => [ExternalSiteWhereInput], {nullable:true})
    AND?: Array<ExternalSiteWhereInput>;

    @Field(() => [ExternalSiteWhereInput], {nullable:true})
    OR?: Array<ExternalSiteWhereInput>;

    @Field(() => [ExternalSiteWhereInput], {nullable:true})
    NOT?: Array<ExternalSiteWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => EnumExternalSiteTypeNullableFilter, {nullable:true})
    type?: EnumExternalSiteTypeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    language?: StringNullableFilter;
}
