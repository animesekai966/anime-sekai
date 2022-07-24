import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeLanguage } from './episode-language.enum';

@InputType()
export class NestedEnumEpisodeLanguageFilter {

    @Field(() => EpisodeLanguage, {nullable:true})
    equals?: keyof typeof EpisodeLanguage;

    @Field(() => [EpisodeLanguage], {nullable:true})
    in?: Array<keyof typeof EpisodeLanguage>;

    @Field(() => [EpisodeLanguage], {nullable:true})
    notIn?: Array<keyof typeof EpisodeLanguage>;

    @Field(() => NestedEnumEpisodeLanguageFilter, {nullable:true})
    not?: NestedEnumEpisodeLanguageFilter;
}
