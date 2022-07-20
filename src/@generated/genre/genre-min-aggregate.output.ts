import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenreType } from '../prisma/genre-type.enum';

@ObjectType()
export class GenreMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => GenreType, {nullable:true})
    type?: keyof typeof GenreType;
}
