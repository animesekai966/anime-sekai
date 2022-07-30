import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterUpdateWithoutAnimeInput } from './character-update-without-anime.input';
import { Type } from 'class-transformer';
import { CharacterCreateWithoutAnimeInput } from './character-create-without-anime.input';

@InputType()
export class CharacterUpsertWithoutAnimeInput {

    @Field(() => CharacterUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => CharacterUpdateWithoutAnimeInput)
    update!: CharacterUpdateWithoutAnimeInput;

    @Field(() => CharacterCreateWithoutAnimeInput, {nullable:false})
    @Type(() => CharacterCreateWithoutAnimeInput)
    create!: CharacterCreateWithoutAnimeInput;
}
