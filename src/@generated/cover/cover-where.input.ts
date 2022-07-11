import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CoverWhereInput {

    @Field(() => [CoverWhereInput], {nullable:true})
    AND?: Array<CoverWhereInput>;

    @Field(() => [CoverWhereInput], {nullable:true})
    OR?: Array<CoverWhereInput>;

    @Field(() => [CoverWhereInput], {nullable:true})
    NOT?: Array<CoverWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    large?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    medium?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    small?: StringFilter;
}
