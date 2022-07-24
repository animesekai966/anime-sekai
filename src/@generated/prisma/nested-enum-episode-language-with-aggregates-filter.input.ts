import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeLanguage } from './episode-language.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumEpisodeLanguageFilter } from './nested-enum-episode-language-filter.input';

@InputType()
export class NestedEnumEpisodeLanguageWithAggregatesFilter {

    @Field(() => EpisodeLanguage, {nullable:true})
    equals?: keyof typeof EpisodeLanguage;

    @Field(() => [EpisodeLanguage], {nullable:true})
    in?: Array<keyof typeof EpisodeLanguage>;

    @Field(() => [EpisodeLanguage], {nullable:true})
    notIn?: Array<keyof typeof EpisodeLanguage>;

    @Field(() => NestedEnumEpisodeLanguageWithAggregatesFilter, {nullable:true})
    not?: NestedEnumEpisodeLanguageWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumEpisodeLanguageFilter, {nullable:true})
    _min?: NestedEnumEpisodeLanguageFilter;

    @Field(() => NestedEnumEpisodeLanguageFilter, {nullable:true})
    _max?: NestedEnumEpisodeLanguageFilter;
}
