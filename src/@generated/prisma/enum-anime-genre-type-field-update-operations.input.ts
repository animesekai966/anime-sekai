import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreType } from './anime-genre-type.enum';

@InputType()
export class EnumAnimeGenreTypeFieldUpdateOperationsInput {

    @Field(() => AnimeGenreType, {nullable:true})
    set?: keyof typeof AnimeGenreType;
}
