import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EpisodeMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    number?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    source?: true;

    @Field(() => Boolean, {nullable:true})
    filler?: true;

    @Field(() => Boolean, {nullable:true})
    last?: true;

    @Field(() => Boolean, {nullable:true})
    language?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @HideField()
    animeId?: true;
}
