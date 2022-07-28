import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateWithoutAnimeInput } from './character-on-anime-create-without-anime.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateOrConnectWithoutAnimeInput } from './character-on-anime-create-or-connect-without-anime.input';
import { CharacterOnAnimeCreateManyAnimeInputEnvelope } from './character-on-anime-create-many-anime-input-envelope.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';

@InputType()
export class CharacterOnAnimeUncheckedCreateNestedManyWithoutAnimeInput {

    @Field(() => [CharacterOnAnimeCreateWithoutAnimeInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateWithoutAnimeInput)
    create?: Array<CharacterOnAnimeCreateWithoutAnimeInput>;

    @Field(() => [CharacterOnAnimeCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<CharacterOnAnimeCreateOrConnectWithoutAnimeInput>;

    @Field(() => CharacterOnAnimeCreateManyAnimeInputEnvelope, {nullable:true})
    @Type(() => CharacterOnAnimeCreateManyAnimeInputEnvelope)
    createMany?: CharacterOnAnimeCreateManyAnimeInputEnvelope;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    connect?: Array<CharacterOnAnimeWhereUniqueInput>;
}
