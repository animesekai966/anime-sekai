import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateWithoutAnimeInput } from './character-on-anime-update-without-anime.input';

@InputType()
export class CharacterOnAnimeUpdateWithWhereUniqueWithoutAnimeInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateWithoutAnimeInput)
    data!: CharacterOnAnimeUpdateWithoutAnimeInput;
}
