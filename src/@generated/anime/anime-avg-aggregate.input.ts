import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    malId?: true;

    @Field(() => Boolean, {nullable:true})
    anilistId?: true;

    @Field(() => Boolean, {nullable:true})
    animeSlayerId?: true;

    @Field(() => Boolean, {nullable:true})
    episodesCount?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;
}
