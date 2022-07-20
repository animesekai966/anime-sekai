import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateManyAnimeInput } from './characters-on-animes-create-many-anime.input';
import { Type } from 'class-transformer';

@InputType()
export class CharactersOnAnimesCreateManyAnimeInputEnvelope {

    @Field(() => [CharactersOnAnimesCreateManyAnimeInput], {nullable:false})
    @Type(() => CharactersOnAnimesCreateManyAnimeInput)
    data!: Array<CharactersOnAnimesCreateManyAnimeInput>;
}
