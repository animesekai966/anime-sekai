import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumAnimeGenreTypeFilter } from '../prisma/enum-anime-genre-type-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class AnimeGenreScalarWhereInput {

    @Field(() => [AnimeGenreScalarWhereInput], {nullable:true})
    AND?: Array<AnimeGenreScalarWhereInput>;

    @Field(() => [AnimeGenreScalarWhereInput], {nullable:true})
    OR?: Array<AnimeGenreScalarWhereInput>;

    @Field(() => [AnimeGenreScalarWhereInput], {nullable:true})
    NOT?: Array<AnimeGenreScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumAnimeGenreTypeFilter, {nullable:true})
    type?: EnumAnimeGenreTypeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    animeIDs?: StringNullableListFilter;
}
