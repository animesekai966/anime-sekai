import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimeRelation } from '../prisma/anime-relation.enum';
import { RelationType } from '../prisma/relation-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RelatedAnime {

    @Field(() => AnimeRelation, {nullable:false,defaultValue:'OTHER'})
    relation!: keyof typeof AnimeRelation;

    @Field(() => RelationType, {nullable:false,defaultValue:'ANIME'})
    type!: keyof typeof RelationType;

    @Field(() => Int, {nullable:false})
    malId!: number;
}
