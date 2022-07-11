import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeGenreAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    malId?: true;
}
