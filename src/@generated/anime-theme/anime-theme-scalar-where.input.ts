import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class AnimeThemeScalarWhereInput {

    @Field(() => [AnimeThemeScalarWhereInput], {nullable:true})
    AND?: Array<AnimeThemeScalarWhereInput>;

    @Field(() => [AnimeThemeScalarWhereInput], {nullable:true})
    OR?: Array<AnimeThemeScalarWhereInput>;

    @Field(() => [AnimeThemeScalarWhereInput], {nullable:true})
    NOT?: Array<AnimeThemeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    animeIDs?: StringNullableListFilter;
}
