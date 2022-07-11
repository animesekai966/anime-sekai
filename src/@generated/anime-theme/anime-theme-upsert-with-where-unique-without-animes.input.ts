import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeThemeUpdateWithoutAnimesInput } from './anime-theme-update-without-animes.input';
import { AnimeThemeCreateWithoutAnimesInput } from './anime-theme-create-without-animes.input';

@InputType()
export class AnimeThemeUpsertWithWhereUniqueWithoutAnimesInput {

    @Field(() => AnimeThemeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeThemeWhereUniqueInput)
    where!: AnimeThemeWhereUniqueInput;

    @Field(() => AnimeThemeUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeThemeUpdateWithoutAnimesInput)
    update!: AnimeThemeUpdateWithoutAnimesInput;

    @Field(() => AnimeThemeCreateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeThemeCreateWithoutAnimesInput)
    create!: AnimeThemeCreateWithoutAnimesInput;
}
