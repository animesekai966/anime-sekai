import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioType } from './anime-studio-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeStudioTypeFilter } from './nested-enum-anime-studio-type-filter.input';

@InputType()
export class NestedEnumAnimeStudioTypeWithAggregatesFilter {

    @Field(() => AnimeStudioType, {nullable:true})
    equals?: keyof typeof AnimeStudioType;

    @Field(() => [AnimeStudioType], {nullable:true})
    in?: Array<keyof typeof AnimeStudioType>;

    @Field(() => [AnimeStudioType], {nullable:true})
    notIn?: Array<keyof typeof AnimeStudioType>;

    @Field(() => NestedEnumAnimeStudioTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeStudioTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeStudioTypeFilter, {nullable:true})
    _min?: NestedEnumAnimeStudioTypeFilter;

    @Field(() => NestedEnumAnimeStudioTypeFilter, {nullable:true})
    _max?: NestedEnumAnimeStudioTypeFilter;
}
