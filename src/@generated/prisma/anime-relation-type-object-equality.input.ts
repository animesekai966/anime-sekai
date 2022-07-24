import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeRelation } from './anime-relation.enum';

@InputType()
export class AnimeRelationTypeObjectEqualityInput {

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => AnimeRelation, {nullable:false})
    type!: keyof typeof AnimeRelation;
}
