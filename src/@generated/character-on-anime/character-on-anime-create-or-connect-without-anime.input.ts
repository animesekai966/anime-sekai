import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateWithoutAnimeInput } from './character-on-anime-create-without-anime.input';

@InputType()
export class CharacterOnAnimeCreateOrConnectWithoutAnimeInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeCreateWithoutAnimeInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateWithoutAnimeInput)
    create!: CharacterOnAnimeCreateWithoutAnimeInput;
}
