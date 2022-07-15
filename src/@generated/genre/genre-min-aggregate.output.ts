import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GenreMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
