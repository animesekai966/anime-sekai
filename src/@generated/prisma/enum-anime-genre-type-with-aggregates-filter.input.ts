import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreType } from './anime-genre-type.enum';
import { NestedEnumAnimeGenreTypeWithAggregatesFilter } from './nested-enum-anime-genre-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeGenreTypeFilter } from './nested-enum-anime-genre-type-filter.input';

@InputType()
export class EnumAnimeGenreTypeWithAggregatesFilter {

    @Field(() => AnimeGenreType, {nullable:true})
    equals?: keyof typeof AnimeGenreType;

    @Field(() => [AnimeGenreType], {nullable:true})
    in?: Array<keyof typeof AnimeGenreType>;

    @Field(() => [AnimeGenreType], {nullable:true})
    notIn?: Array<keyof typeof AnimeGenreType>;

    @Field(() => NestedEnumAnimeGenreTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeGenreTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeGenreTypeFilter, {nullable:true})
    _min?: NestedEnumAnimeGenreTypeFilter;

    @Field(() => NestedEnumAnimeGenreTypeFilter, {nullable:true})
    _max?: NestedEnumAnimeGenreTypeFilter;
}
