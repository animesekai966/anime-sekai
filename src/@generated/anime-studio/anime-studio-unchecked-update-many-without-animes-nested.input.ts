import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioCreateWithoutAnimesInput } from './anime-studio-create-without-animes.input';
import { Type } from 'class-transformer';
import { AnimeStudioCreateOrConnectWithoutAnimesInput } from './anime-studio-create-or-connect-without-animes.input';
import { AnimeStudioUpsertWithWhereUniqueWithoutAnimesInput } from './anime-studio-upsert-with-where-unique-without-animes.input';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { AnimeStudioUpdateWithWhereUniqueWithoutAnimesInput } from './anime-studio-update-with-where-unique-without-animes.input';
import { AnimeStudioUpdateManyWithWhereWithoutAnimesInput } from './anime-studio-update-many-with-where-without-animes.input';
import { AnimeStudioScalarWhereInput } from './anime-studio-scalar-where.input';

@InputType()
export class AnimeStudioUncheckedUpdateManyWithoutAnimesNestedInput {

    @Field(() => [AnimeStudioCreateWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeStudioCreateWithoutAnimesInput)
    create?: Array<AnimeStudioCreateWithoutAnimesInput>;

    @Field(() => [AnimeStudioCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeStudioCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<AnimeStudioCreateOrConnectWithoutAnimesInput>;

    @Field(() => [AnimeStudioUpsertWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeStudioUpsertWithWhereUniqueWithoutAnimesInput)
    upsert?: Array<AnimeStudioUpsertWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [AnimeStudioWhereUniqueInput], {nullable:true})
    @Type(() => AnimeStudioWhereUniqueInput)
    set?: Array<AnimeStudioWhereUniqueInput>;

    @Field(() => [AnimeStudioWhereUniqueInput], {nullable:true})
    @Type(() => AnimeStudioWhereUniqueInput)
    disconnect?: Array<AnimeStudioWhereUniqueInput>;

    @Field(() => [AnimeStudioWhereUniqueInput], {nullable:true})
    @Type(() => AnimeStudioWhereUniqueInput)
    delete?: Array<AnimeStudioWhereUniqueInput>;

    @Field(() => [AnimeStudioWhereUniqueInput], {nullable:true})
    @Type(() => AnimeStudioWhereUniqueInput)
    connect?: Array<AnimeStudioWhereUniqueInput>;

    @Field(() => [AnimeStudioUpdateWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeStudioUpdateWithWhereUniqueWithoutAnimesInput)
    update?: Array<AnimeStudioUpdateWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [AnimeStudioUpdateManyWithWhereWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeStudioUpdateManyWithWhereWithoutAnimesInput)
    updateMany?: Array<AnimeStudioUpdateManyWithWhereWithoutAnimesInput>;

    @Field(() => [AnimeStudioScalarWhereInput], {nullable:true})
    @Type(() => AnimeStudioScalarWhereInput)
    deleteMany?: Array<AnimeStudioScalarWhereInput>;
}
