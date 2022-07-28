import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateWithoutAnimeInput } from './character-on-anime-update-without-anime.input';
import { CharacterOnAnimeCreateWithoutAnimeInput } from './character-on-anime-create-without-anime.input';

@InputType()
export class CharacterOnAnimeUpsertWithWhereUniqueWithoutAnimeInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateWithoutAnimeInput)
    update!: CharacterOnAnimeUpdateWithoutAnimeInput;

    @Field(() => CharacterOnAnimeCreateWithoutAnimeInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateWithoutAnimeInput)
    create!: CharacterOnAnimeCreateWithoutAnimeInput;
}
