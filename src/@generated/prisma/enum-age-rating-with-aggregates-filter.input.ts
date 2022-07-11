import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgeRating } from './age-rating.enum';
import { NestedEnumAgeRatingWithAggregatesFilter } from './nested-enum-age-rating-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAgeRatingFilter } from './nested-enum-age-rating-filter.input';

@InputType()
export class EnumAgeRatingWithAggregatesFilter {

    @Field(() => AgeRating, {nullable:true})
    equals?: keyof typeof AgeRating;

    @Field(() => [AgeRating], {nullable:true})
    in?: Array<keyof typeof AgeRating>;

    @Field(() => [AgeRating], {nullable:true})
    notIn?: Array<keyof typeof AgeRating>;

    @Field(() => NestedEnumAgeRatingWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAgeRatingWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAgeRatingFilter, {nullable:true})
    _min?: NestedEnumAgeRatingFilter;

    @Field(() => NestedEnumAgeRatingFilter, {nullable:true})
    _max?: NestedEnumAgeRatingFilter;
}
