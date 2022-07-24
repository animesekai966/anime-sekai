import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumAnimeSourcesWithAggregatesFilter } from '../prisma/enum-anime-sources-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumEpisodeLanguageWithAggregatesFilter } from '../prisma/enum-episode-language-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class EpisodeScalarWhereWithAggregatesInput {

    @Field(() => [EpisodeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EpisodeScalarWhereWithAggregatesInput>;

    @Field(() => [EpisodeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EpisodeScalarWhereWithAggregatesInput>;

    @Field(() => [EpisodeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EpisodeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    number?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumAnimeSourcesWithAggregatesFilter, {nullable:true})
    source?: EnumAnimeSourcesWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    filler?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    last?: BoolWithAggregatesFilter;

    @Field(() => EnumEpisodeLanguageWithAggregatesFilter, {nullable:true})
    language?: EnumEpisodeLanguageWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    animeId?: StringWithAggregatesFilter;
}
