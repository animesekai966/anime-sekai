import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelation } from '../prisma/anime-relation.enum';
import { RelationType } from '../prisma/relation-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class RelatedAnimeCreateInput {

    @Field(() => AnimeRelation, {nullable:true})
    relation?: keyof typeof AnimeRelation;

    @Field(() => RelationType, {nullable:true})
    type?: keyof typeof RelationType;

    @Field(() => Int, {nullable:false})
    malId!: number;
}
