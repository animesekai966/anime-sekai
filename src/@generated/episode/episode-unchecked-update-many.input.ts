import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ServerCreateInput } from '../server/server-create.input';
import { EnumAnimeSourcesFieldUpdateOperationsInput } from '../prisma/enum-anime-sources-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumEpisodeLanguageFieldUpdateOperationsInput } from '../prisma/enum-episode-language-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EpisodeUncheckedUpdateManyInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    number?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => [ServerCreateInput], {nullable:true})
    servers?: Array<ServerCreateInput>;

    @Field(() => EnumAnimeSourcesFieldUpdateOperationsInput, {nullable:true})
    source?: EnumAnimeSourcesFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    filler?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    last?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumEpisodeLanguageFieldUpdateOperationsInput, {nullable:true})
    language?: EnumEpisodeLanguageFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    animeId?: StringFieldUpdateOperationsInput;
}
