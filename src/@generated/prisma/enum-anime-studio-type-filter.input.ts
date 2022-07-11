import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioType } from './anime-studio-type.enum';
import { NestedEnumAnimeStudioTypeFilter } from './nested-enum-anime-studio-type-filter.input';

@InputType()
export class EnumAnimeStudioTypeFilter {

    @Field(() => AnimeStudioType, {nullable:true})
    equals?: keyof typeof AnimeStudioType;

    @Field(() => [AnimeStudioType], {nullable:true})
    in?: Array<keyof typeof AnimeStudioType>;

    @Field(() => [AnimeStudioType], {nullable:true})
    notIn?: Array<keyof typeof AnimeStudioType>;

    @Field(() => NestedEnumAnimeStudioTypeFilter, {nullable:true})
    not?: NestedEnumAnimeStudioTypeFilter;
}
