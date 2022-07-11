import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSeason } from './anime-season.enum';
import { NestedEnumAnimeSeasonWithAggregatesFilter } from './nested-enum-anime-season-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeSeasonFilter } from './nested-enum-anime-season-filter.input';

@InputType()
export class EnumAnimeSeasonWithAggregatesFilter {

    @Field(() => AnimeSeason, {nullable:true})
    equals?: keyof typeof AnimeSeason;

    @Field(() => [AnimeSeason], {nullable:true})
    in?: Array<keyof typeof AnimeSeason>;

    @Field(() => [AnimeSeason], {nullable:true})
    notIn?: Array<keyof typeof AnimeSeason>;

    @Field(() => NestedEnumAnimeSeasonWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeSeasonWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeSeasonFilter, {nullable:true})
    _min?: NestedEnumAnimeSeasonFilter;

    @Field(() => NestedEnumAnimeSeasonFilter, {nullable:true})
    _max?: NestedEnumAnimeSeasonFilter;
}
