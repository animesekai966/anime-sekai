import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreType } from './genre-type.enum';

@InputType()
export class NestedEnumGenreTypeFilter {

    @Field(() => GenreType, {nullable:true})
    equals?: keyof typeof GenreType;

    @Field(() => [GenreType], {nullable:true})
    in?: Array<keyof typeof GenreType>;

    @Field(() => [GenreType], {nullable:true})
    notIn?: Array<keyof typeof GenreType>;

    @Field(() => NestedEnumGenreTypeFilter, {nullable:true})
    not?: NestedEnumGenreTypeFilter;
}
