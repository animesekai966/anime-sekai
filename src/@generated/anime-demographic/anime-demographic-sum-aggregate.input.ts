import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeDemographicSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    malId?: true;
}
