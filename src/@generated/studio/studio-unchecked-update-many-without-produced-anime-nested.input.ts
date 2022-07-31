import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioCreateWithoutProducedAnimeInput } from './studio-create-without-produced-anime.input';
import { Type } from 'class-transformer';
import { StudioCreateOrConnectWithoutProducedAnimeInput } from './studio-create-or-connect-without-produced-anime.input';
import { StudioUpsertWithWhereUniqueWithoutProducedAnimeInput } from './studio-upsert-with-where-unique-without-produced-anime.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { StudioUpdateWithWhereUniqueWithoutProducedAnimeInput } from './studio-update-with-where-unique-without-produced-anime.input';
import { StudioUpdateManyWithWhereWithoutProducedAnimeInput } from './studio-update-many-with-where-without-produced-anime.input';
import { StudioScalarWhereInput } from './studio-scalar-where.input';

@InputType()
export class StudioUncheckedUpdateManyWithoutProducedAnimeNestedInput {

    @Field(() => [StudioCreateWithoutProducedAnimeInput], {nullable:true})
    @Type(() => StudioCreateWithoutProducedAnimeInput)
    create?: Array<StudioCreateWithoutProducedAnimeInput>;

    @Field(() => [StudioCreateOrConnectWithoutProducedAnimeInput], {nullable:true})
    @Type(() => StudioCreateOrConnectWithoutProducedAnimeInput)
    connectOrCreate?: Array<StudioCreateOrConnectWithoutProducedAnimeInput>;

    @Field(() => [StudioUpsertWithWhereUniqueWithoutProducedAnimeInput], {nullable:true})
    @Type(() => StudioUpsertWithWhereUniqueWithoutProducedAnimeInput)
    upsert?: Array<StudioUpsertWithWhereUniqueWithoutProducedAnimeInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    set?: Array<StudioWhereUniqueInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    disconnect?: Array<StudioWhereUniqueInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    delete?: Array<StudioWhereUniqueInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    connect?: Array<StudioWhereUniqueInput>;

    @Field(() => [StudioUpdateWithWhereUniqueWithoutProducedAnimeInput], {nullable:true})
    @Type(() => StudioUpdateWithWhereUniqueWithoutProducedAnimeInput)
    update?: Array<StudioUpdateWithWhereUniqueWithoutProducedAnimeInput>;

    @Field(() => [StudioUpdateManyWithWhereWithoutProducedAnimeInput], {nullable:true})
    @Type(() => StudioUpdateManyWithWhereWithoutProducedAnimeInput)
    updateMany?: Array<StudioUpdateManyWithWhereWithoutProducedAnimeInput>;

    @Field(() => [StudioScalarWhereInput], {nullable:true})
    @Type(() => StudioScalarWhereInput)
    deleteMany?: Array<StudioScalarWhereInput>;
}
