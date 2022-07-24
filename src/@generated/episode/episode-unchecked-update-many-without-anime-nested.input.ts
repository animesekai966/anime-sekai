import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeCreateWithoutAnimeInput } from './episode-create-without-anime.input';
import { Type } from 'class-transformer';
import { EpisodeCreateOrConnectWithoutAnimeInput } from './episode-create-or-connect-without-anime.input';
import { EpisodeUpsertWithWhereUniqueWithoutAnimeInput } from './episode-upsert-with-where-unique-without-anime.input';
import { EpisodeCreateManyAnimeInputEnvelope } from './episode-create-many-anime-input-envelope.input';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';
import { EpisodeUpdateWithWhereUniqueWithoutAnimeInput } from './episode-update-with-where-unique-without-anime.input';
import { EpisodeUpdateManyWithWhereWithoutAnimeInput } from './episode-update-many-with-where-without-anime.input';
import { EpisodeScalarWhereInput } from './episode-scalar-where.input';

@InputType()
export class EpisodeUncheckedUpdateManyWithoutAnimeNestedInput {

    @Field(() => [EpisodeCreateWithoutAnimeInput], {nullable:true})
    @Type(() => EpisodeCreateWithoutAnimeInput)
    create?: Array<EpisodeCreateWithoutAnimeInput>;

    @Field(() => [EpisodeCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => EpisodeCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<EpisodeCreateOrConnectWithoutAnimeInput>;

    @Field(() => [EpisodeUpsertWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => EpisodeUpsertWithWhereUniqueWithoutAnimeInput)
    upsert?: Array<EpisodeUpsertWithWhereUniqueWithoutAnimeInput>;

    @Field(() => EpisodeCreateManyAnimeInputEnvelope, {nullable:true})
    @Type(() => EpisodeCreateManyAnimeInputEnvelope)
    createMany?: EpisodeCreateManyAnimeInputEnvelope;

    @Field(() => [EpisodeWhereUniqueInput], {nullable:true})
    @Type(() => EpisodeWhereUniqueInput)
    set?: Array<EpisodeWhereUniqueInput>;

    @Field(() => [EpisodeWhereUniqueInput], {nullable:true})
    @Type(() => EpisodeWhereUniqueInput)
    disconnect?: Array<EpisodeWhereUniqueInput>;

    @Field(() => [EpisodeWhereUniqueInput], {nullable:true})
    @Type(() => EpisodeWhereUniqueInput)
    delete?: Array<EpisodeWhereUniqueInput>;

    @Field(() => [EpisodeWhereUniqueInput], {nullable:true})
    @Type(() => EpisodeWhereUniqueInput)
    connect?: Array<EpisodeWhereUniqueInput>;

    @Field(() => [EpisodeUpdateWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => EpisodeUpdateWithWhereUniqueWithoutAnimeInput)
    update?: Array<EpisodeUpdateWithWhereUniqueWithoutAnimeInput>;

    @Field(() => [EpisodeUpdateManyWithWhereWithoutAnimeInput], {nullable:true})
    @Type(() => EpisodeUpdateManyWithWhereWithoutAnimeInput)
    updateMany?: Array<EpisodeUpdateManyWithWhereWithoutAnimeInput>;

    @Field(() => [EpisodeScalarWhereInput], {nullable:true})
    @Type(() => EpisodeScalarWhereInput)
    deleteMany?: Array<EpisodeScalarWhereInput>;
}
