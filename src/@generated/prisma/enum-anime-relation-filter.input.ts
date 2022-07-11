import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelation } from './anime-relation.enum';
import { NestedEnumAnimeRelationFilter } from './nested-enum-anime-relation-filter.input';

@InputType()
export class EnumAnimeRelationFilter {

    @Field(() => AnimeRelation, {nullable:true})
    equals?: keyof typeof AnimeRelation;

    @Field(() => [AnimeRelation], {nullable:true})
    in?: Array<keyof typeof AnimeRelation>;

    @Field(() => [AnimeRelation], {nullable:true})
    notIn?: Array<keyof typeof AnimeRelation>;

    @Field(() => NestedEnumAnimeRelationFilter, {nullable:true})
    not?: NestedEnumAnimeRelationFilter;
}
