import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeSource } from './anime-source.enum';

@InputType()
export class NestedEnumAnimeSourceFilter {

    @Field(() => AnimeSource, {nullable:true})
    equals?: keyof typeof AnimeSource;

    @Field(() => [AnimeSource], {nullable:true})
    in?: Array<keyof typeof AnimeSource>;

    @Field(() => [AnimeSource], {nullable:true})
    notIn?: Array<keyof typeof AnimeSource>;

    @Field(() => NestedEnumAnimeSourceFilter, {nullable:true})
    not?: NestedEnumAnimeSourceFilter;
}
