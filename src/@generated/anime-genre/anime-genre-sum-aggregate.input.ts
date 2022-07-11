import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeGenreSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    malId?: true;
}
