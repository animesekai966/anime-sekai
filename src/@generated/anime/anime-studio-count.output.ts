import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeStudioCount {

    @Field(() => Int, {nullable:false})
    animes?: number;

    @Field(() => Int, {nullable:false})
    animesProduced?: number;
}
