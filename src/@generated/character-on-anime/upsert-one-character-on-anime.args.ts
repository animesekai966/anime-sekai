import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateInput } from './character-on-anime-create.input';
import { CharacterOnAnimeUpdateInput } from './character-on-anime-update.input';

@ArgsType()
export class UpsertOneCharacterOnAnimeArgs {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeCreateInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateInput)
    create!: CharacterOnAnimeCreateInput;

    @Field(() => CharacterOnAnimeUpdateInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateInput)
    update!: CharacterOnAnimeUpdateInput;
}
