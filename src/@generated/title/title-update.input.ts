import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TitleUpdatesynonymsInput } from './title-updatesynonyms.input';

@InputType()
export class TitleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    english?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    romaji?: StringFieldUpdateOperationsInput;

    @Field(() => TitleUpdatesynonymsInput, {nullable:true})
    synonyms?: TitleUpdatesynonymsInput;
}
