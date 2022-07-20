import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeUpdateWithoutCharactersInput } from './anime-update-without-characters.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutCharactersInput } from './anime-create-without-characters.input';

@InputType()
export class AnimeUpsertWithoutCharactersInput {

    @Field(() => AnimeUpdateWithoutCharactersInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutCharactersInput)
    update!: AnimeUpdateWithoutCharactersInput;

    @Field(() => AnimeCreateWithoutCharactersInput, {nullable:false})
    @Type(() => AnimeCreateWithoutCharactersInput)
    create!: AnimeCreateWithoutCharactersInput;
}
