import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateManyAnimeInput } from './character-on-anime-create-many-anime.input';
import { Type } from 'class-transformer';

@InputType()
export class CharacterOnAnimeCreateManyAnimeInputEnvelope {

    @Field(() => [CharacterOnAnimeCreateManyAnimeInput], {nullable:false})
    @Type(() => CharacterOnAnimeCreateManyAnimeInput)
    data!: Array<CharacterOnAnimeCreateManyAnimeInput>;
}
