import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class StaffOnAnimeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    relationId?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @HideField()
    animeId?: string;

    @HideField()
    staffId?: string;
}
