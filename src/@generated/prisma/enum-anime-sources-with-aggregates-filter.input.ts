import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSources } from './anime-sources.enum';
import { NestedEnumAnimeSourcesWithAggregatesFilter } from './nested-enum-anime-sources-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeSourcesFilter } from './nested-enum-anime-sources-filter.input';

@InputType()
export class EnumAnimeSourcesWithAggregatesFilter {

    @Field(() => AnimeSources, {nullable:true})
    equals?: keyof typeof AnimeSources;

    @Field(() => [AnimeSources], {nullable:true})
    in?: Array<keyof typeof AnimeSources>;

    @Field(() => [AnimeSources], {nullable:true})
    notIn?: Array<keyof typeof AnimeSources>;

    @Field(() => NestedEnumAnimeSourcesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeSourcesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeSourcesFilter, {nullable:true})
    _min?: NestedEnumAnimeSourcesFilter;

    @Field(() => NestedEnumAnimeSourcesFilter, {nullable:true})
    _max?: NestedEnumAnimeSourcesFilter;
}
