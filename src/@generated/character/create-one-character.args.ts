import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterCreateInput } from './character-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCharacterArgs {

    @Field(() => CharacterCreateInput, {nullable:false})
    @Type(() => CharacterCreateInput)
    data!: CharacterCreateInput;
}
