import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSeason } from './anime-season.enum';
import { NestedEnumAnimeSeasonFilter } from './nested-enum-anime-season-filter.input';

@InputType()
export class EnumAnimeSeasonFilter {

    @Field(() => AnimeSeason, {nullable:true})
    equals?: keyof typeof AnimeSeason;

    @Field(() => [AnimeSeason], {nullable:true})
    in?: Array<keyof typeof AnimeSeason>;

    @Field(() => [AnimeSeason], {nullable:true})
    notIn?: Array<keyof typeof AnimeSeason>;

    @Field(() => NestedEnumAnimeSeasonFilter, {nullable:true})
    not?: NestedEnumAnimeSeasonFilter;
}
