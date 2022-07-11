import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class TitleWhereInput {

    @Field(() => [TitleWhereInput], {nullable:true})
    AND?: Array<TitleWhereInput>;

    @Field(() => [TitleWhereInput], {nullable:true})
    OR?: Array<TitleWhereInput>;

    @Field(() => [TitleWhereInput], {nullable:true})
    NOT?: Array<TitleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    english?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    romaji?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    synonyms?: StringNullableListFilter;
}
