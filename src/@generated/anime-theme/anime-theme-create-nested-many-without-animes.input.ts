import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeThemeCreateWithoutAnimesInput } from './anime-theme-create-without-animes.input';
import { Type } from 'class-transformer';
import { AnimeThemeCreateOrConnectWithoutAnimesInput } from './anime-theme-create-or-connect-without-animes.input';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';

@InputType()
export class AnimeThemeCreateNestedManyWithoutAnimesInput {

    @Field(() => [AnimeThemeCreateWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeThemeCreateWithoutAnimesInput)
    create?: Array<AnimeThemeCreateWithoutAnimesInput>;

    @Field(() => [AnimeThemeCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeThemeCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<AnimeThemeCreateOrConnectWithoutAnimesInput>;

    @Field(() => [AnimeThemeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeThemeWhereUniqueInput)
    connect?: Array<AnimeThemeWhereUniqueInput>;
}
