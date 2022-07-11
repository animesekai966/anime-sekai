import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeType } from './anime-type.enum';
import { NestedEnumAnimeTypeWithAggregatesFilter } from './nested-enum-anime-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeTypeFilter } from './nested-enum-anime-type-filter.input';

@InputType()
export class EnumAnimeTypeWithAggregatesFilter {

    @Field(() => AnimeType, {nullable:true})
    equals?: keyof typeof AnimeType;

    @Field(() => [AnimeType], {nullable:true})
    in?: Array<keyof typeof AnimeType>;

    @Field(() => [AnimeType], {nullable:true})
    notIn?: Array<keyof typeof AnimeType>;

    @Field(() => NestedEnumAnimeTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeTypeFilter, {nullable:true})
    _min?: NestedEnumAnimeTypeFilter;

    @Field(() => NestedEnumAnimeTypeFilter, {nullable:true})
    _max?: NestedEnumAnimeTypeFilter;
}
