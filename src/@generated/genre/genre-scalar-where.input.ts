import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumGenreTypeFilter } from '../prisma/enum-genre-type-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GenreScalarWhereInput {

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    AND?: Array<GenreScalarWhereInput>;

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    OR?: Array<GenreScalarWhereInput>;

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    NOT?: Array<GenreScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumGenreTypeFilter, {nullable:true})
    type?: EnumGenreTypeFilter;

    @HideField()
    animeIDs?: StringNullableListFilter;
}
