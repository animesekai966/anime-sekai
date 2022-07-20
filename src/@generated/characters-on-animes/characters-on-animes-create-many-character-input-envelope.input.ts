import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateManyCharacterInput } from './characters-on-animes-create-many-character.input';
import { Type } from 'class-transformer';

@InputType()
export class CharactersOnAnimesCreateManyCharacterInputEnvelope {

    @Field(() => [CharactersOnAnimesCreateManyCharacterInput], {nullable:false})
    @Type(() => CharactersOnAnimesCreateManyCharacterInput)
    data!: Array<CharactersOnAnimesCreateManyCharacterInput>;
}
