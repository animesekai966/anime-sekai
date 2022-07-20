import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreType } from './genre-type.enum';
import { NestedEnumGenreTypeWithAggregatesFilter } from './nested-enum-genre-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGenreTypeFilter } from './nested-enum-genre-type-filter.input';

@InputType()
export class EnumGenreTypeWithAggregatesFilter {

    @Field(() => GenreType, {nullable:true})
    equals?: keyof typeof GenreType;

    @Field(() => [GenreType], {nullable:true})
    in?: Array<keyof typeof GenreType>;

    @Field(() => [GenreType], {nullable:true})
    notIn?: Array<keyof typeof GenreType>;

    @Field(() => NestedEnumGenreTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGenreTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGenreTypeFilter, {nullable:true})
    _min?: NestedEnumGenreTypeFilter;

    @Field(() => NestedEnumGenreTypeFilter, {nullable:true})
    _max?: NestedEnumGenreTypeFilter;
}
