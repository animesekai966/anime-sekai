import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateManyCharacterInput } from './character-on-anime-create-many-character.input';
import { Type } from 'class-transformer';

@InputType()
export class CharacterOnAnimeCreateManyCharacterInputEnvelope {

    @Field(() => [CharacterOnAnimeCreateManyCharacterInput], {nullable:false})
    @Type(() => CharacterOnAnimeCreateManyCharacterInput)
    data!: Array<CharacterOnAnimeCreateManyCharacterInput>;
}
