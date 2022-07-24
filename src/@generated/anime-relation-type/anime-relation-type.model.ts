import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeRelation } from '../prisma/anime-relation.enum';

@ObjectType()
export class AnimeRelationType {

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:true})
    anilistId!: number | null;

    @Field(() => AnimeRelation, {nullable:false})
    type!: keyof typeof AnimeRelation;
}
