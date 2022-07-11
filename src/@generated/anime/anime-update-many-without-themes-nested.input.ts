import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutThemesInput } from './anime-create-without-themes.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutThemesInput } from './anime-create-or-connect-without-themes.input';
import { AnimeUpsertWithWhereUniqueWithoutThemesInput } from './anime-upsert-with-where-unique-without-themes.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { AnimeUpdateWithWhereUniqueWithoutThemesInput } from './anime-update-with-where-unique-without-themes.input';
import { AnimeUpdateManyWithWhereWithoutThemesInput } from './anime-update-many-with-where-without-themes.input';
import { AnimeScalarWhereInput } from './anime-scalar-where.input';

@InputType()
export class AnimeUpdateManyWithoutThemesNestedInput {

    @Field(() => [AnimeCreateWithoutThemesInput], {nullable:true})
    @Type(() => AnimeCreateWithoutThemesInput)
    create?: Array<AnimeCreateWithoutThemesInput>;

    @Field(() => [AnimeCreateOrConnectWithoutThemesInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutThemesInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutThemesInput>;

    @Field(() => [AnimeUpsertWithWhereUniqueWithoutThemesInput], {nullable:true})
    @Type(() => AnimeUpsertWithWhereUniqueWithoutThemesInput)
    upsert?: Array<AnimeUpsertWithWhereUniqueWithoutThemesInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    set?: Array<AnimeWhereUniqueInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    disconnect?: Array<AnimeWhereUniqueInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    delete?: Array<AnimeWhereUniqueInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: Array<AnimeWhereUniqueInput>;

    @Field(() => [AnimeUpdateWithWhereUniqueWithoutThemesInput], {nullable:true})
    @Type(() => AnimeUpdateWithWhereUniqueWithoutThemesInput)
    update?: Array<AnimeUpdateWithWhereUniqueWithoutThemesInput>;

    @Field(() => [AnimeUpdateManyWithWhereWithoutThemesInput], {nullable:true})
    @Type(() => AnimeUpdateManyWithWhereWithoutThemesInput)
    updateMany?: Array<AnimeUpdateManyWithWhereWithoutThemesInput>;

    @Field(() => [AnimeScalarWhereInput], {nullable:true})
    @Type(() => AnimeScalarWhereInput)
    deleteMany?: Array<AnimeScalarWhereInput>;
}
