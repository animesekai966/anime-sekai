import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumAnimeGenreTypeFieldUpdateOperationsInput } from '../prisma/enum-anime-genre-type-field-update-operations.input';
import { AnimeGenreUpdateanimeIDsInput } from './anime-genre-updateanime-i-ds.input';

@InputType()
export class AnimeGenreUpdateWithoutAnimesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAnimeGenreTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAnimeGenreTypeFieldUpdateOperationsInput;

    @Field(() => AnimeGenreUpdateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeGenreUpdateanimeIDsInput;
}
