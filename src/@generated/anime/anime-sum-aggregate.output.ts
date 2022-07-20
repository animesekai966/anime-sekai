import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeSumAggregate {

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => Int, {nullable:true})
    animeSlayerId?: number;

    @Field(() => Int, {nullable:true})
    episodesCount?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;
}
