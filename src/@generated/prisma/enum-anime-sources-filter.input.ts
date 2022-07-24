import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSources } from './anime-sources.enum';
import { NestedEnumAnimeSourcesFilter } from './nested-enum-anime-sources-filter.input';

@InputType()
export class EnumAnimeSourcesFilter {

    @Field(() => AnimeSources, {nullable:true})
    equals?: keyof typeof AnimeSources;

    @Field(() => [AnimeSources], {nullable:true})
    in?: Array<keyof typeof AnimeSources>;

    @Field(() => [AnimeSources], {nullable:true})
    notIn?: Array<keyof typeof AnimeSources>;

    @Field(() => NestedEnumAnimeSourcesFilter, {nullable:true})
    not?: NestedEnumAnimeSourcesFilter;
}
