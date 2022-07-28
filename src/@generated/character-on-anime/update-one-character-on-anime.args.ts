import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeUpdateInput } from './character-on-anime-update.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';

@ArgsType()
export class UpdateOneCharacterOnAnimeArgs {

    @Field(() => CharacterOnAnimeUpdateInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateInput)
    data!: CharacterOnAnimeUpdateInput;

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;
}
