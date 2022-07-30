import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class CharacterNameWhereInput {

    @Field(() => [CharacterNameWhereInput], {nullable:true})
    AND?: Array<CharacterNameWhereInput>;

    @Field(() => [CharacterNameWhereInput], {nullable:true})
    OR?: Array<CharacterNameWhereInput>;

    @Field(() => [CharacterNameWhereInput], {nullable:true})
    NOT?: Array<CharacterNameWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    english?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    native?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    arabic?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    alternates?: StringNullableListFilter;
}
