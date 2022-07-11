import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioRole } from './anime-studio-role.enum';
import { NestedEnumAnimeStudioRoleWithAggregatesFilter } from './nested-enum-anime-studio-role-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAnimeStudioRoleFilter } from './nested-enum-anime-studio-role-filter.input';

@InputType()
export class EnumAnimeStudioRoleWithAggregatesFilter {

    @Field(() => AnimeStudioRole, {nullable:true})
    equals?: keyof typeof AnimeStudioRole;

    @Field(() => [AnimeStudioRole], {nullable:true})
    in?: Array<keyof typeof AnimeStudioRole>;

    @Field(() => [AnimeStudioRole], {nullable:true})
    notIn?: Array<keyof typeof AnimeStudioRole>;

    @Field(() => NestedEnumAnimeStudioRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAnimeStudioRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAnimeStudioRoleFilter, {nullable:true})
    _min?: NestedEnumAnimeStudioRoleFilter;

    @Field(() => NestedEnumAnimeStudioRoleFilter, {nullable:true})
    _max?: NestedEnumAnimeStudioRoleFilter;
}
