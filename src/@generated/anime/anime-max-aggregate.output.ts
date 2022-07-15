import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnimeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
