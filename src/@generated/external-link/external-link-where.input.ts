import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumExternalLinkTypeFilter } from '../prisma/enum-external-link-type-filter.input';

@InputType()
export class ExternalLinkWhereInput {

    @Field(() => [ExternalLinkWhereInput], {nullable:true})
    AND?: Array<ExternalLinkWhereInput>;

    @Field(() => [ExternalLinkWhereInput], {nullable:true})
    OR?: Array<ExternalLinkWhereInput>;

    @Field(() => [ExternalLinkWhereInput], {nullable:true})
    NOT?: Array<ExternalLinkWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    site?: StringNullableFilter;

    @Field(() => EnumExternalLinkTypeFilter, {nullable:true})
    type?: EnumExternalLinkTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    language?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;
}
