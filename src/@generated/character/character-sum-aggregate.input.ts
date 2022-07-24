import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    malId?: true;

    @Field(() => Boolean, {nullable:true})
    anilistId?: true;
}