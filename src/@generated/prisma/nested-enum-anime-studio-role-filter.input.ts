import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioRole } from './anime-studio-role.enum';

@InputType()
export class NestedEnumAnimeStudioRoleFilter {

    @Field(() => AnimeStudioRole, {nullable:true})
    equals?: keyof typeof AnimeStudioRole;

    @Field(() => [AnimeStudioRole], {nullable:true})
    in?: Array<keyof typeof AnimeStudioRole>;

    @Field(() => [AnimeStudioRole], {nullable:true})
    notIn?: Array<keyof typeof AnimeStudioRole>;

    @Field(() => NestedEnumAnimeStudioRoleFilter, {nullable:true})
    not?: NestedEnumAnimeStudioRoleFilter;
}
