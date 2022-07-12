import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioCreateWithoutAnimesProducedInput } from './anime-studio-create-without-animes-produced.input';
import { Type } from 'class-transformer';
import { AnimeStudioCreateOrConnectWithoutAnimesProducedInput } from './anime-studio-create-or-connect-without-animes-produced.input';
import { AnimeStudioUpsertWithWhereUniqueWithoutAnimesProducedInput } from './anime-studio-upsert-with-where-unique-without-animes-produced.input';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { AnimeStudioUpdateWithWhereUniqueWithoutAnimesProducedInput } from './anime-studio-update-with-where-unique-without-animes-produced.input';
import { AnimeStudioUpdateManyWithWhereWithoutAnimesProducedInput } from './anime-studio-update-many-with-where-without-animes-produced.input';
import { AnimeStudioScalarWhereInput } from './anime-studio-scalar-where.input';

@InputType()
export class AnimeStudioUncheckedUpdateManyWithoutAnimesProducedNestedInput {

    @Field(() => [AnimeStudioCreateWithoutAnimesProducedInput], {nullable:true})
    @Type(() => AnimeStudioCreateWithoutAnimesProducedInput)
    create?: Array<AnimeStudioCreateWithoutAnimesProducedInput>;

    @Field(() => [AnimeStudioCreateOrConnectWithoutAnimesProducedInput], {nullable:true})
    @Type(() => AnimeStudioCreateOrConnectWithoutAnimesProducedInput)
    connectOrCreate?: Array<AnimeStudioCreateOrConnectWithoutAnimesProducedInput>;

    @Field(() => [AnimeStudioUpsertWithWhereUniqueWithoutAnimesProducedInput], {nullable:true})
    @Type(() => AnimeStudioUpsertWithWhereUniqueWithoutAnimesProducedInput)
    upsert?: Array<AnimeStudioUpsertWithWhereUniqueWithoutAnimesProducedInput>;

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

    @Field(() => [AnimeStudioUpdateWithWhereUniqueWithoutAnimesProducedInput], {nullable:true})
    @Type(() => AnimeStudioUpdateWithWhereUniqueWithoutAnimesProducedInput)
    update?: Array<AnimeStudioUpdateWithWhereUniqueWithoutAnimesProducedInput>;

    @Field(() => [AnimeStudioUpdateManyWithWhereWithoutAnimesProducedInput], {nullable:true})
    @Type(() => AnimeStudioUpdateManyWithWhereWithoutAnimesProducedInput)
    updateMany?: Array<AnimeStudioUpdateManyWithWhereWithoutAnimesProducedInput>;

    @Field(() => [AnimeStudioScalarWhereInput], {nullable:true})
    @Type(() => AnimeStudioScalarWhereInput)
    deleteMany?: Array<AnimeStudioScalarWhereInput>;
}
