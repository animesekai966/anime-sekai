import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStatus } from './anime-status.enum';
import { NestedEnumAnimeStatusFilter } from './nested-enum-anime-status-filter.input';

@InputType()
export class EnumAnimeStatusFilter {

    @Field(() => AnimeStatus, {nullable:true})
    equals?: keyof typeof AnimeStatus;

    @Field(() => [AnimeStatus], {nullable:true})
    in?: Array<keyof typeof AnimeStatus>;

    @Field(() => [AnimeStatus], {nullable:true})
    notIn?: Array<keyof typeof AnimeStatus>;

    @Field(() => NestedEnumAnimeStatusFilter, {nullable:true})
    not?: NestedEnumAnimeStatusFilter;
}
