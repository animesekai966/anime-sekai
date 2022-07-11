import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioRole } from './anime-studio-role.enum';

@InputType()
export class EnumAnimeStudioRoleFieldUpdateOperationsInput {

    @Field(() => AnimeStudioRole, {nullable:true})
    set?: keyof typeof AnimeStudioRole;
}
