import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSeason } from './anime-season.enum';

@InputType()
export class NestedEnumAnimeSeasonFilter {

    @Field(() => AnimeSeason, {nullable:true})
    equals?: keyof typeof AnimeSeason;

    @Field(() => [AnimeSeason], {nullable:true})
    in?: Array<keyof typeof AnimeSeason>;

    @Field(() => [AnimeSeason], {nullable:true})
    notIn?: Array<keyof typeof AnimeSeason>;

    @Field(() => NestedEnumAnimeSeasonFilter, {nullable:true})
    not?: NestedEnumAnimeSeasonFilter;
}
