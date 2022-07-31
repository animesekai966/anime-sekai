import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkType } from './external-link-type.enum';
import { NestedEnumExternalLinkTypeFilter } from './nested-enum-external-link-type-filter.input';

@InputType()
export class EnumExternalLinkTypeFilter {

    @Field(() => ExternalLinkType, {nullable:true})
    equals?: keyof typeof ExternalLinkType;

    @Field(() => [ExternalLinkType], {nullable:true})
    in?: Array<keyof typeof ExternalLinkType>;

    @Field(() => [ExternalLinkType], {nullable:true})
    notIn?: Array<keyof typeof ExternalLinkType>;

    @Field(() => NestedEnumExternalLinkTypeFilter, {nullable:true})
    not?: NestedEnumExternalLinkTypeFilter;
}
