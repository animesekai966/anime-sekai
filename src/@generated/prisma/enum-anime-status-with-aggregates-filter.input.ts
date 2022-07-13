import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStatus } from './anime-status.enum';
import { NestedEnumAnimeStatusWithAggregatesFilter } from './nested-enum-anime-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeStatusFilter } from './nested-enum-anime-status-filter.input';

@InputType()
export class EnumAnimeStatusWithAggregatesFilter {

    @Field(() => AnimeStatus, {nullable:true})
    equals?: keyof typeof AnimeStatus;

    @Field(() => [AnimeStatus], {nullable:true})
    in?: Array<keyof typeof AnimeStatus>;

    @Field(() => [AnimeStatus], {nullable:true})
    notIn?: Array<keyof typeof AnimeStatus>;

    @Field(() => NestedEnumAnimeStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeStatusFilter, {nullable:true})
    _min?: NestedEnumAnimeStatusFilter;

    @Field(() => NestedEnumAnimeStatusFilter, {nullable:true})
    _max?: NestedEnumAnimeStatusFilter;
}
