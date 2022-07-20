import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterNameCreateInput } from './character-name-create.input';
import { Type } from 'class-transformer';
import { CharacterNameUpdateInput } from './character-name-update.input';

@InputType()
export class CharacterNameUpdateEnvelopeInput {

    @Field(() => CharacterNameCreateInput, {nullable:true})
    @Type(() => CharacterNameCreateInput)
    set?: CharacterNameCreateInput;

    @Field(() => CharacterNameUpdateInput, {nullable:true})
    @Type(() => CharacterNameUpdateInput)
    update?: CharacterNameUpdateInput;
}
