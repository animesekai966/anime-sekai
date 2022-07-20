import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AnimeCoverImageWhereInput {

    @Field(() => [AnimeCoverImageWhereInput], {nullable:true})
    AND?: Array<AnimeCoverImageWhereInput>;

    @Field(() => [AnimeCoverImageWhereInput], {nullable:true})
    OR?: Array<AnimeCoverImageWhereInput>;

    @Field(() => [AnimeCoverImageWhereInput], {nullable:true})
    NOT?: Array<AnimeCoverImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    large?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    medium?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    small?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;
}
