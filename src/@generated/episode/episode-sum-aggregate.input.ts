import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EpisodeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    number?: true;
}
