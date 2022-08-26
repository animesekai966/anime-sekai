import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { AnimeRelationFilter } from '../anime/anime-relation-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { ServerObjectEqualityInput } from '../prisma/server-object-equality.input';
import { EnumAnimeSourcesFilter } from '../prisma/enum-anime-sources-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumEpisodeLanguageFilter } from '../prisma/enum-episode-language-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EpisodeWhereInput {

    @Field(() => [EpisodeWhereInput], {nullable:true})
    AND?: Array<EpisodeWhereInput>;

    @Field(() => [EpisodeWhereInput], {nullable:true})
    OR?: Array<EpisodeWhereInput>;

    @Field(() => [EpisodeWhereInput], {nullable:true})
    NOT?: Array<EpisodeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => AnimeRelationFilter, {nullable:true})
    anime?: AnimeRelationFilter;

    @Field(() => FloatFilter, {nullable:true})
    number?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => [ServerObjectEqualityInput], {nullable:true})
    servers?: Array<ServerObjectEqualityInput>;

    @Field(() => EnumAnimeSourcesFilter, {nullable:true})
    source?: EnumAnimeSourcesFilter;

    @Field(() => BoolFilter, {nullable:true})
    filler?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    last?: BoolFilter;

    @Field(() => EnumEpisodeLanguageFilter, {nullable:true})
    language?: EnumEpisodeLanguageFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @HideField()
    animeId?: StringFilter;
}
