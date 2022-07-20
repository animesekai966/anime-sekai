import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeFormat } from './anime-format.enum';
import { NestedEnumAnimeFormatFilter } from './nested-enum-anime-format-filter.input';

@InputType()
export class EnumAnimeFormatFilter {

    @Field(() => AnimeFormat, {nullable:true})
    equals?: keyof typeof AnimeFormat;

    @Field(() => [AnimeFormat], {nullable:true})
    in?: Array<keyof typeof AnimeFormat>;

    @Field(() => [AnimeFormat], {nullable:true})
    notIn?: Array<keyof typeof AnimeFormat>;

    @Field(() => NestedEnumAnimeFormatFilter, {nullable:true})
    not?: NestedEnumAnimeFormatFilter;
}
