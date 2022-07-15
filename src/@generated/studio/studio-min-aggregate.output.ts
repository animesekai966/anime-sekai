import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudioMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
