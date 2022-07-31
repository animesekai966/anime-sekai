import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StaffOnAnimeMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    relationId?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @HideField()
    animeId?: true;

    @HideField()
    staffId?: true;
}
