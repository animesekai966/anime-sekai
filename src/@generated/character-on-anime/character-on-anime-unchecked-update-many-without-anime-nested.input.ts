import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateWithoutAnimeInput } from './character-on-anime-create-without-anime.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateOrConnectWithoutAnimeInput } from './character-on-anime-create-or-connect-without-anime.input';
import { CharacterOnAnimeUpsertWithWhereUniqueWithoutAnimeInput } from './character-on-anime-upsert-with-where-unique-without-anime.input';
import { CharacterOnAnimeCreateManyAnimeInputEnvelope } from './character-on-anime-create-many-anime-input-envelope.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { CharacterOnAnimeUpdateWithWhereUniqueWithoutAnimeInput } from './character-on-anime-update-with-where-unique-without-anime.input';
import { CharacterOnAnimeUpdateManyWithWhereWithoutAnimeInput } from './character-on-anime-update-many-with-where-without-anime.input';
import { CharacterOnAnimeScalarWhereInput } from './character-on-anime-scalar-where.input';

@InputType()
export class CharacterOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput {

    @Field(() => [CharacterOnAnimeCreateWithoutAnimeInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateWithoutAnimeInput)
    create?: Array<CharacterOnAnimeCreateWithoutAnimeInput>;

    @Field(() => [CharacterOnAnimeCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<CharacterOnAnimeCreateOrConnectWithoutAnimeInput>;

    @Field(() => [CharacterOnAnimeUpsertWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpsertWithWhereUniqueWithoutAnimeInput)
    upsert?: Array<CharacterOnAnimeUpsertWithWhereUniqueWithoutAnimeInput>;

    @Field(() => CharacterOnAnimeCreateManyAnimeInputEnvelope, {nullable:true})
    @Type(() => CharacterOnAnimeCreateManyAnimeInputEnvelope)
    createMany?: CharacterOnAnimeCreateManyAnimeInputEnvelope;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    set?: Array<CharacterOnAnimeWhereUniqueInput>;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    disconnect?: Array<CharacterOnAnimeWhereUniqueInput>;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    delete?: Array<CharacterOnAnimeWhereUniqueInput>;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    connect?: Array<CharacterOnAnimeWhereUniqueInput>;

    @Field(() => [CharacterOnAnimeUpdateWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpdateWithWhereUniqueWithoutAnimeInput)
    update?: Array<CharacterOnAnimeUpdateWithWhereUniqueWithoutAnimeInput>;

    @Field(() => [CharacterOnAnimeUpdateManyWithWhereWithoutAnimeInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpdateManyWithWhereWithoutAnimeInput)
    updateMany?: Array<CharacterOnAnimeUpdateManyWithWhereWithoutAnimeInput>;

    @Field(() => [CharacterOnAnimeScalarWhereInput], {nullable:true})
    @Type(() => CharacterOnAnimeScalarWhereInput)
    deleteMany?: Array<CharacterOnAnimeScalarWhereInput>;
}
