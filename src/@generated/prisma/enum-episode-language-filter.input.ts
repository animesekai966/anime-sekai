import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeLanguage } from './episode-language.enum';
import { NestedEnumEpisodeLanguageFilter } from './nested-enum-episode-language-filter.input';

@InputType()
export class EnumEpisodeLanguageFilter {

    @Field(() => EpisodeLanguage, {nullable:true})
    equals?: keyof typeof EpisodeLanguage;

    @Field(() => [EpisodeLanguage], {nullable:true})
    in?: Array<keyof typeof EpisodeLanguage>;

    @Field(() => [EpisodeLanguage], {nullable:true})
    notIn?: Array<keyof typeof EpisodeLanguage>;

    @Field(() => NestedEnumEpisodeLanguageFilter, {nullable:true})
    not?: NestedEnumEpisodeLanguageFilter;
}
