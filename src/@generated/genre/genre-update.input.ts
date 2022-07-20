import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumGenreTypeFieldUpdateOperationsInput } from '../prisma/enum-genre-type-field-update-operations.input';
import { AnimeUpdateManyWithoutGenresNestedInput } from '../anime/anime-update-many-without-genres-nested.input';
import { GenreUpdateanimeIDsInput } from './genre-updateanime-i-ds.input';

@InputType()
export class GenreUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumGenreTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumGenreTypeFieldUpdateOperationsInput;

    @Field(() => AnimeUpdateManyWithoutGenresNestedInput, {nullable:true})
    animes?: AnimeUpdateManyWithoutGenresNestedInput;

    @Field(() => GenreUpdateanimeIDsInput, {nullable:true})
    animeIDs?: GenreUpdateanimeIDsInput;
}
