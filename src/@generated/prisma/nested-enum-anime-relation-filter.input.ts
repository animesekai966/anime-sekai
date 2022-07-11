import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelation } from './anime-relation.enum';

@InputType()
export class NestedEnumAnimeRelationFilter {

    @Field(() => AnimeRelation, {nullable:true})
    equals?: keyof typeof AnimeRelation;

    @Field(() => [AnimeRelation], {nullable:true})
    in?: Array<keyof typeof AnimeRelation>;

    @Field(() => [AnimeRelation], {nullable:true})
    notIn?: Array<keyof typeof AnimeRelation>;

    @Field(() => NestedEnumAnimeRelationFilter, {nullable:true})
    not?: NestedEnumAnimeRelationFilter;
}
