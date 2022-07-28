import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateInput } from './character-on-anime-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCharacterOnAnimeArgs {

    @Field(() => CharacterOnAnimeCreateInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateInput)
    data!: CharacterOnAnimeCreateInput;
}
