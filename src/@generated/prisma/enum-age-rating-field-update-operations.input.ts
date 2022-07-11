import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AgeRating } from './age-rating.enum';

@InputType()
export class EnumAgeRatingFieldUpdateOperationsInput {

    @Field(() => AgeRating, {nullable:true})
    set?: keyof typeof AgeRating;
}
