import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AnimeCoverWhereInput {

    @Field(() => [AnimeCoverWhereInput], {nullable:true})
    AND?: Array<AnimeCoverWhereInput>;

    @Field(() => [AnimeCoverWhereInput], {nullable:true})
    OR?: Array<AnimeCoverWhereInput>;

    @Field(() => [AnimeCoverWhereInput], {nullable:true})
    NOT?: Array<AnimeCoverWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    large?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    medium?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    small?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;
}
