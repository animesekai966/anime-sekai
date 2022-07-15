import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumAnimeGenreTypeFieldUpdateOperationsInput } from '../prisma/enum-anime-genre-type-field-update-operations.input';
import { AnimeGenreUpdateanimeIDsInput } from './anime-genre-updateanime-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AnimeGenreUncheckedUpdateManyWithoutGenresInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAnimeGenreTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAnimeGenreTypeFieldUpdateOperationsInput;

    @HideField()
    animeIDs?: AnimeGenreUpdateanimeIDsInput;
}
