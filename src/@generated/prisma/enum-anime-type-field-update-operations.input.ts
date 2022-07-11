import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeType } from './anime-type.enum';

@InputType()
export class EnumAnimeTypeFieldUpdateOperationsInput {

    @Field(() => AnimeType, {nullable:true})
    set?: keyof typeof AnimeType;
}
