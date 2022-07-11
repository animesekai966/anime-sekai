import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeType } from './anime-type.enum';
import { NestedEnumAnimeTypeFilter } from './nested-enum-anime-type-filter.input';

@InputType()
export class EnumAnimeTypeFilter {

    @Field(() => AnimeType, {nullable:true})
    equals?: keyof typeof AnimeType;

    @Field(() => [AnimeType], {nullable:true})
    in?: Array<keyof typeof AnimeType>;

    @Field(() => [AnimeType], {nullable:true})
    notIn?: Array<keyof typeof AnimeType>;

    @Field(() => NestedEnumAnimeTypeFilter, {nullable:true})
    not?: NestedEnumAnimeTypeFilter;
}
