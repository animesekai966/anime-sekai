import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelationTypeObjectEqualityInput } from './anime-relation-type-object-equality.input';
import { AnimeRelationTypeWhereInput } from '../anime-relation-type/anime-relation-type-where.input';

@InputType()
export class AnimeRelationTypeCompositeFilter {

    @Field(() => AnimeRelationTypeObjectEqualityInput, {nullable:true})
    equals?: AnimeRelationTypeObjectEqualityInput;

    @Field(() => AnimeRelationTypeWhereInput, {nullable:true})
    is?: AnimeRelationTypeWhereInput;

    @Field(() => AnimeRelationTypeWhereInput, {nullable:true})
    isNot?: AnimeRelationTypeWhereInput;
}
