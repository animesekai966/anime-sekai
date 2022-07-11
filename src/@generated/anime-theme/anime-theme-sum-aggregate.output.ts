import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeThemeSumAggregate {

    @Field(() => Int, {nullable:true})
    malId?: number;
}
