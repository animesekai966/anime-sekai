import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudioMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
