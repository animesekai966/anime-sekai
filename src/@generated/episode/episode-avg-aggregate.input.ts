import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EpisodeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    number?: true;
}
