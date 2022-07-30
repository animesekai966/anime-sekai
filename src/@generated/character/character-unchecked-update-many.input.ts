import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CharacterNameUpdateEnvelopeInput } from '../character-name/character-name-update-envelope.input';
import { ImageUpdateEnvelopeInput } from '../image/image-update-envelope.input';
import { DescriptionUpdateEnvelopeInput } from '../description/description-update-envelope.input';

@InputType()
export class CharacterUncheckedUpdateManyInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => CharacterNameUpdateEnvelopeInput, {nullable:true})
    name?: CharacterNameUpdateEnvelopeInput;

    @Field(() => ImageUpdateEnvelopeInput, {nullable:true})
    image?: ImageUpdateEnvelopeInput;

    @Field(() => DescriptionUpdateEnvelopeInput, {nullable:true})
    description?: DescriptionUpdateEnvelopeInput;
}
