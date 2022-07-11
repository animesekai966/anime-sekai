import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgeRating } from './age-rating.enum';
import { NestedEnumAgeRatingFilter } from './nested-enum-age-rating-filter.input';

@InputType()
export class EnumAgeRatingFilter {

    @Field(() => AgeRating, {nullable:true})
    equals?: keyof typeof AgeRating;

    @Field(() => [AgeRating], {nullable:true})
    in?: Array<keyof typeof AgeRating>;

    @Field(() => [AgeRating], {nullable:true})
    notIn?: Array<keyof typeof AgeRating>;

    @Field(() => NestedEnumAgeRatingFilter, {nullable:true})
    not?: NestedEnumAgeRatingFilter;
}
