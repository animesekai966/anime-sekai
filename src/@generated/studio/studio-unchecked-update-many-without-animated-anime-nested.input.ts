import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioCreateWithoutAnimatedAnimeInput } from './studio-create-without-animated-anime.input';
import { Type } from 'class-transformer';
import { StudioCreateOrConnectWithoutAnimatedAnimeInput } from './studio-create-or-connect-without-animated-anime.input';
import { StudioUpsertWithWhereUniqueWithoutAnimatedAnimeInput } from './studio-upsert-with-where-unique-without-animated-anime.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { StudioUpdateWithWhereUniqueWithoutAnimatedAnimeInput } from './studio-update-with-where-unique-without-animated-anime.input';
import { StudioUpdateManyWithWhereWithoutAnimatedAnimeInput } from './studio-update-many-with-where-without-animated-anime.input';
import { StudioScalarWhereInput } from './studio-scalar-where.input';

@InputType()
export class StudioUncheckedUpdateManyWithoutAnimatedAnimeNestedInput {

    @Field(() => [StudioCreateWithoutAnimatedAnimeInput], {nullable:true})
    @Type(() => StudioCreateWithoutAnimatedAnimeInput)
    create?: Array<StudioCreateWithoutAnimatedAnimeInput>;

    @Field(() => [StudioCreateOrConnectWithoutAnimatedAnimeInput], {nullable:true})
    @Type(() => StudioCreateOrConnectWithoutAnimatedAnimeInput)
    connectOrCreate?: Array<StudioCreateOrConnectWithoutAnimatedAnimeInput>;

    @Field(() => [StudioUpsertWithWhereUniqueWithoutAnimatedAnimeInput], {nullable:true})
    @Type(() => StudioUpsertWithWhereUniqueWithoutAnimatedAnimeInput)
    upsert?: Array<StudioUpsertWithWhereUniqueWithoutAnimatedAnimeInput>;

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

    @Field(() => [StudioUpdateWithWhereUniqueWithoutAnimatedAnimeInput], {nullable:true})
    @Type(() => StudioUpdateWithWhereUniqueWithoutAnimatedAnimeInput)
    update?: Array<StudioUpdateWithWhereUniqueWithoutAnimatedAnimeInput>;

    @Field(() => [StudioUpdateManyWithWhereWithoutAnimatedAnimeInput], {nullable:true})
    @Type(() => StudioUpdateManyWithWhereWithoutAnimatedAnimeInput)
    updateMany?: Array<StudioUpdateManyWithWhereWithoutAnimatedAnimeInput>;

    @Field(() => [StudioScalarWhereInput], {nullable:true})
    @Type(() => StudioScalarWhereInput)
    deleteMany?: Array<StudioScalarWhereInput>;
}
