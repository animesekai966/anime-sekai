import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class DescriptionWhereInput {

    @Field(() => [DescriptionWhereInput], {nullable:true})
    AND?: Array<DescriptionWhereInput>;

    @Field(() => [DescriptionWhereInput], {nullable:true})
    OR?: Array<DescriptionWhereInput>;

    @Field(() => [DescriptionWhereInput], {nullable:true})
    NOT?: Array<DescriptionWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    ar?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    en?: StringNullableFilter;
}
