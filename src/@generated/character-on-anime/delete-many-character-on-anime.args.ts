import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereInput } from './character-on-anime-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCharacterOnAnimeArgs {

    @Field(() => CharacterOnAnimeWhereInput, {nullable:true})
    @Type(() => CharacterOnAnimeWhereInput)
    where?: CharacterOnAnimeWhereInput;
}
