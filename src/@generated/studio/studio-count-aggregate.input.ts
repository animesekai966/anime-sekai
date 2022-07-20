import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StudioCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    malId?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    animatedAnimeIDs?: true;

    @Field(() => Boolean, {nullable:true})
    producedAnimeIDs?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
