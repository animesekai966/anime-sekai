import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeThemeCreateWithoutAnimesInput } from './anime-theme-create-without-animes.input';
import { Type } from 'class-transformer';
import { AnimeThemeCreateOrConnectWithoutAnimesInput } from './anime-theme-create-or-connect-without-animes.input';
import { AnimeThemeUpsertWithWhereUniqueWithoutAnimesInput } from './anime-theme-upsert-with-where-unique-without-animes.input';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';
import { AnimeThemeUpdateWithWhereUniqueWithoutAnimesInput } from './anime-theme-update-with-where-unique-without-animes.input';
import { AnimeThemeUpdateManyWithWhereWithoutAnimesInput } from './anime-theme-update-many-with-where-without-animes.input';
import { AnimeThemeScalarWhereInput } from './anime-theme-scalar-where.input';

@InputType()
export class AnimeThemeUpdateManyWithoutAnimesNestedInput {

    @Field(() => [AnimeThemeCreateWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeThemeCreateWithoutAnimesInput)
    create?: Array<AnimeThemeCreateWithoutAnimesInput>;

    @Field(() => [AnimeThemeCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeThemeCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<AnimeThemeCreateOrConnectWithoutAnimesInput>;

    @Field(() => [AnimeThemeUpsertWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeThemeUpsertWithWhereUniqueWithoutAnimesInput)
    upsert?: Array<AnimeThemeUpsertWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [AnimeThemeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeThemeWhereUniqueInput)
    set?: Array<AnimeThemeWhereUniqueInput>;

    @Field(() => [AnimeThemeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeThemeWhereUniqueInput)
    disconnect?: Array<AnimeThemeWhereUniqueInput>;

    @Field(() => [AnimeThemeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeThemeWhereUniqueInput)
    delete?: Array<AnimeThemeWhereUniqueInput>;

    @Field(() => [AnimeThemeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeThemeWhereUniqueInput)
    connect?: Array<AnimeThemeWhereUniqueInput>;

    @Field(() => [AnimeThemeUpdateWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeThemeUpdateWithWhereUniqueWithoutAnimesInput)
    update?: Array<AnimeThemeUpdateWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [AnimeThemeUpdateManyWithWhereWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeThemeUpdateManyWithWhereWithoutAnimesInput)
    updateMany?: Array<AnimeThemeUpdateManyWithWhereWithoutAnimesInput>;

    @Field(() => [AnimeThemeScalarWhereInput], {nullable:true})
    @Type(() => AnimeThemeScalarWhereInput)
    deleteMany?: Array<AnimeThemeScalarWhereInput>;
}
