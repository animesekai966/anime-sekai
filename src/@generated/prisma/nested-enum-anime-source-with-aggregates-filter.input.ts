import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSource } from './anime-source.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeSourceFilter } from './nested-enum-anime-source-filter.input';

@InputType()
export class NestedEnumAnimeSourceWithAggregatesFilter {

    @Field(() => AnimeSource, {nullable:true})
    equals?: keyof typeof AnimeSource;

    @Field(() => [AnimeSource], {nullable:true})
    in?: Array<keyof typeof AnimeSource>;

    @Field(() => [AnimeSource], {nullable:true})
    notIn?: Array<keyof typeof AnimeSource>;

    @Field(() => NestedEnumAnimeSourceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeSourceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeSourceFilter, {nullable:true})
    _min?: NestedEnumAnimeSourceFilter;

    @Field(() => NestedEnumAnimeSourceFilter, {nullable:true})
    _max?: NestedEnumAnimeSourceFilter;
}
