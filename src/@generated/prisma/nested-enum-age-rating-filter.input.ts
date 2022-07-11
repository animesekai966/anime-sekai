import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgeRating } from './age-rating.enum';

@InputType()
export class NestedEnumAgeRatingFilter {

    @Field(() => AgeRating, {nullable:true})
    equals?: keyof typeof AgeRating;

    @Field(() => [AgeRating], {nullable:true})
    in?: Array<keyof typeof AgeRating>;

    @Field(() => [AgeRating], {nullable:true})
    notIn?: Array<keyof typeof AgeRating>;

    @Field(() => NestedEnumAgeRatingFilter, {nullable:true})
    not?: NestedEnumAgeRatingFilter;
}
