import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeStudioRole } from '../prisma/anime-studio-role.enum';

@ObjectType()
export class AnimeStudioMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => AnimeStudioRole, {nullable:true})
    role?: keyof typeof AnimeStudioRole;

    @Field(() => String, {nullable:true})
    name?: string;
}
