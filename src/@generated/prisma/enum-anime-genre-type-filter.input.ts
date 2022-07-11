import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreType } from './anime-genre-type.enum';
import { NestedEnumAnimeGenreTypeFilter } from './nested-enum-anime-genre-type-filter.input';

@InputType()
export class EnumAnimeGenreTypeFilter {

    @Field(() => AnimeGenreType, {nullable:true})
    equals?: keyof typeof AnimeGenreType;

    @Field(() => [AnimeGenreType], {nullable:true})
    in?: Array<keyof typeof AnimeGenreType>;

    @Field(() => [AnimeGenreType], {nullable:true})
    notIn?: Array<keyof typeof AnimeGenreType>;

    @Field(() => NestedEnumAnimeGenreTypeFilter, {nullable:true})
    not?: NestedEnumAnimeGenreTypeFilter;
}
