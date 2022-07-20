import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharactersOnAnimesMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    characterId?: true;

    @Field(() => Boolean, {nullable:true})
    staffId?: true;

    @Field(() => Boolean, {nullable:true})
    animeId?: true;
}
