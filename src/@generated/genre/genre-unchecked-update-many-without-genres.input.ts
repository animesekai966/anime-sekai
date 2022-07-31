import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumGenreTypeFieldUpdateOperationsInput } from '../prisma/enum-genre-type-field-update-operations.input';
import { GenreUpdateanimeIDsInput } from './genre-updateanime-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GenreUncheckedUpdateManyWithoutGenresInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumGenreTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumGenreTypeFieldUpdateOperationsInput;

    @HideField()
    animeIDs?: GenreUpdateanimeIDsInput;
}
