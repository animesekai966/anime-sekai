import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreType } from './genre-type.enum';
import { NestedEnumGenreTypeFilter } from './nested-enum-genre-type-filter.input';

@InputType()
export class EnumGenreTypeFilter {

    @Field(() => GenreType, {nullable:true})
    equals?: keyof typeof GenreType;

    @Field(() => [GenreType], {nullable:true})
    in?: Array<keyof typeof GenreType>;

    @Field(() => [GenreType], {nullable:true})
    notIn?: Array<keyof typeof GenreType>;

    @Field(() => NestedEnumGenreTypeFilter, {nullable:true})
    not?: NestedEnumGenreTypeFilter;
}
