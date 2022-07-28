import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelationTypeObjectEqualityInput } from './anime-relation-type-object-equality.input';
import { AnimeRelationTypeWhereInput } from '../anime-relation-type/anime-relation-type-where.input';

@InputType()
export class AnimeRelationTypeCompositeListFilter {

    @Field(() => [AnimeRelationTypeObjectEqualityInput], {nullable:true})
    equals?: Array<AnimeRelationTypeObjectEqualityInput>;

    @Field(() => AnimeRelationTypeWhereInput, {nullable:true})
    every?: AnimeRelationTypeWhereInput;

    @Field(() => AnimeRelationTypeWhereInput, {nullable:true})
    some?: AnimeRelationTypeWhereInput;

    @Field(() => AnimeRelationTypeWhereInput, {nullable:true})
    none?: AnimeRelationTypeWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
