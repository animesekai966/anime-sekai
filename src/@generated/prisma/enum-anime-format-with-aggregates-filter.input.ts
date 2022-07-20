import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeFormat } from './anime-format.enum';
import { NestedEnumAnimeFormatWithAggregatesFilter } from './nested-enum-anime-format-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeFormatFilter } from './nested-enum-anime-format-filter.input';

@InputType()
export class EnumAnimeFormatWithAggregatesFilter {

    @Field(() => AnimeFormat, {nullable:true})
    equals?: keyof typeof AnimeFormat;

    @Field(() => [AnimeFormat], {nullable:true})
    in?: Array<keyof typeof AnimeFormat>;

    @Field(() => [AnimeFormat], {nullable:true})
    notIn?: Array<keyof typeof AnimeFormat>;

    @Field(() => NestedEnumAnimeFormatWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeFormatWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeFormatFilter, {nullable:true})
    _min?: NestedEnumAnimeFormatFilter;

    @Field(() => NestedEnumAnimeFormatFilter, {nullable:true})
    _max?: NestedEnumAnimeFormatFilter;
}
