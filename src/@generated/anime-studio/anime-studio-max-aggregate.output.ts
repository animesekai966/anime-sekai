import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeStudioType } from '../prisma/anime-studio-type.enum';

@ObjectType()
export class AnimeStudioMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => AnimeStudioType, {nullable:true})
    type?: keyof typeof AnimeStudioType;

    @Field(() => String, {nullable:true})
    name?: string;
}
