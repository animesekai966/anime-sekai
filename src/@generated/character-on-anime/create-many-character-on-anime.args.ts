import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateManyInput } from './character-on-anime-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCharacterOnAnimeArgs {

    @Field(() => [CharacterOnAnimeCreateManyInput], {nullable:false})
    @Type(() => CharacterOnAnimeCreateManyInput)
    data!: Array<CharacterOnAnimeCreateManyInput>;
}
