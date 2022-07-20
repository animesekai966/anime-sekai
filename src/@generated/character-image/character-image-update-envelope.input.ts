import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterImageCreateInput } from './character-image-create.input';
import { Type } from 'class-transformer';
import { CharacterImageUpdateInput } from './character-image-update.input';

@InputType()
export class CharacterImageUpdateEnvelopeInput {

    @Field(() => CharacterImageCreateInput, {nullable:true})
    @Type(() => CharacterImageCreateInput)
    set?: CharacterImageCreateInput;

    @Field(() => CharacterImageUpdateInput, {nullable:true})
    @Type(() => CharacterImageUpdateInput)
    update?: CharacterImageUpdateInput;
}
