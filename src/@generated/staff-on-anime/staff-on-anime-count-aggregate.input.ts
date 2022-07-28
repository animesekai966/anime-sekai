import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StaffOnAnimeCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    animeId?: true;

    @Field(() => Boolean, {nullable:true})
    staffId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
