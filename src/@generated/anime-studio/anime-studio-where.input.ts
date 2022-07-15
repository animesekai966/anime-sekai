import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { AnimeListRelationFilter } from '../anime/anime-list-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AnimeStudioWhereInput {

    @Field(() => [AnimeStudioWhereInput], {nullable:true})
    AND?: Array<AnimeStudioWhereInput>;

    @Field(() => [AnimeStudioWhereInput], {nullable:true})
    OR?: Array<AnimeStudioWhereInput>;

    @Field(() => [AnimeStudioWhereInput], {nullable:true})
    NOT?: Array<AnimeStudioWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => AnimeListRelationFilter, {nullable:true})
    animes?: AnimeListRelationFilter;

    @HideField()
    animeIDs?: StringNullableListFilter;

    @HideField()
    animesProduced?: AnimeListRelationFilter;
}
