import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeFormat } from './anime-format.enum';

@InputType()
export class NestedEnumAnimeFormatFilter {

    @Field(() => AnimeFormat, {nullable:true})
    equals?: keyof typeof AnimeFormat;

    @Field(() => [AnimeFormat], {nullable:true})
    in?: Array<keyof typeof AnimeFormat>;

    @Field(() => [AnimeFormat], {nullable:true})
    notIn?: Array<keyof typeof AnimeFormat>;

    @Field(() => NestedEnumAnimeFormatFilter, {nullable:true})
    not?: NestedEnumAnimeFormatFilter;
}
