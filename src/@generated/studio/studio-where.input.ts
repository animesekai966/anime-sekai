import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { AnimeListRelationFilter } from '../anime/anime-list-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class StudioWhereInput {

    @Field(() => [StudioWhereInput], {nullable:true})
    AND?: Array<StudioWhereInput>;

    @Field(() => [StudioWhereInput], {nullable:true})
    OR?: Array<StudioWhereInput>;

    @Field(() => [StudioWhereInput], {nullable:true})
    NOT?: Array<StudioWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => AnimeListRelationFilter, {nullable:true})
    animatedAnimes?: AnimeListRelationFilter;

    @Field(() => AnimeListRelationFilter, {nullable:true})
    producedAnimes?: AnimeListRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    animatedAnimeIDs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    producedAnimeIDs?: StringNullableListFilter;
}
