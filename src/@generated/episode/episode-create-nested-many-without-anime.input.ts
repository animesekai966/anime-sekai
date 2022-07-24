import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeCreateWithoutAnimeInput } from './episode-create-without-anime.input';
import { Type } from 'class-transformer';
import { EpisodeCreateOrConnectWithoutAnimeInput } from './episode-create-or-connect-without-anime.input';
import { EpisodeCreateManyAnimeInputEnvelope } from './episode-create-many-anime-input-envelope.input';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';

@InputType()
export class EpisodeCreateNestedManyWithoutAnimeInput {

    @Field(() => [EpisodeCreateWithoutAnimeInput], {nullable:true})
    @Type(() => EpisodeCreateWithoutAnimeInput)
    create?: Array<EpisodeCreateWithoutAnimeInput>;

    @Field(() => [EpisodeCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => EpisodeCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<EpisodeCreateOrConnectWithoutAnimeInput>;

    @Field(() => EpisodeCreateManyAnimeInputEnvelope, {nullable:true})
    @Type(() => EpisodeCreateManyAnimeInputEnvelope)
    createMany?: EpisodeCreateManyAnimeInputEnvelope;

    @Field(() => [EpisodeWhereUniqueInput], {nullable:true})
    @Type(() => EpisodeWhereUniqueInput)
    connect?: Array<EpisodeWhereUniqueInput>;
}
