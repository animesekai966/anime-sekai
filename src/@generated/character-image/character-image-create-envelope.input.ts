import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterImageCreateInput } from './character-image-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CharacterImageCreateEnvelopeInput {

    @Field(() => CharacterImageCreateInput, {nullable:true})
    @Type(() => CharacterImageCreateInput)
    set?: CharacterImageCreateInput;
}
