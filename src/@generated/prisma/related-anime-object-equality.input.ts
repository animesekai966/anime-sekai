import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelation } from './anime-relation.enum';
import { RelationType } from './relation-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class RelatedAnimeObjectEqualityInput {

    @Field(() => AnimeRelation, {nullable:false})
    relation!: keyof typeof AnimeRelation;

    @Field(() => RelationType, {nullable:false})
    type!: keyof typeof RelationType;

    @Field(() => Int, {nullable:false})
    malId!: number;
}
