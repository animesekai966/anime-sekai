import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumGenreTypeFieldUpdateOperationsInput } from '../prisma/enum-genre-type-field-update-operations.input';
import { AnimeUncheckedUpdateManyWithoutGenresNestedInput } from '../anime/anime-unchecked-update-many-without-genres-nested.input';
import { GenreUpdateanimeIDsInput } from './genre-updateanime-i-ds.input';

@InputType()
export class GenreUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumGenreTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumGenreTypeFieldUpdateOperationsInput;

    @Field(() => AnimeUncheckedUpdateManyWithoutGenresNestedInput, {nullable:true})
    animes?: AnimeUncheckedUpdateManyWithoutGenresNestedInput;

    @Field(() => GenreUpdateanimeIDsInput, {nullable:true})
    animeIDs?: GenreUpdateanimeIDsInput;
}
