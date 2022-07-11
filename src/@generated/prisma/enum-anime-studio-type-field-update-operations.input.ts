import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioType } from './anime-studio-type.enum';

@InputType()
export class EnumAnimeStudioTypeFieldUpdateOperationsInput {

    @Field(() => AnimeStudioType, {nullable:true})
    set?: keyof typeof AnimeStudioType;
}
