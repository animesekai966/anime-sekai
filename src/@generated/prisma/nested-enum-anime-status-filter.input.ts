import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStatus } from './anime-status.enum';

@InputType()
export class NestedEnumAnimeStatusFilter {

    @Field(() => AnimeStatus, {nullable:true})
    equals?: keyof typeof AnimeStatus;

    @Field(() => [AnimeStatus], {nullable:true})
    in?: Array<keyof typeof AnimeStatus>;

    @Field(() => [AnimeStatus], {nullable:true})
    notIn?: Array<keyof typeof AnimeStatus>;

    @Field(() => NestedEnumAnimeStatusFilter, {nullable:true})
    not?: NestedEnumAnimeStatusFilter;
}
