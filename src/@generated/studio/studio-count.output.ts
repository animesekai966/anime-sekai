import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StudioCount {

    @Field(() => Int, {nullable:false})
    animatedAnime?: number;

    @Field(() => Int, {nullable:false})
    producedAnime?: number;
}
