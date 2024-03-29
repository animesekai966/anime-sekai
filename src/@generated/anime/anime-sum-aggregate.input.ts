import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    malId?: true;

    @Field(() => Boolean, {nullable:true})
    anilistId?: true;

    @Field(() => Boolean, {nullable:true})
    episodesCount?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;
}
