import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AnimeScoreProviderObjectEqualityInput {

    @Field(() => Float, {nullable:true})
    score?: number;

    @Field(() => Int, {nullable:true})
    scoredBy?: number;
}
