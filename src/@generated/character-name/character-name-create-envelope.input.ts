import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterNameCreateInput } from './character-name-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CharacterNameCreateEnvelopeInput {

    @Field(() => CharacterNameCreateInput, {nullable:true})
    @Type(() => CharacterNameCreateInput)
    set?: CharacterNameCreateInput;
}
