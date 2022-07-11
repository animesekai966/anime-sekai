import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutThemesInput } from './anime-update-without-themes.input';
import { AnimeCreateWithoutThemesInput } from './anime-create-without-themes.input';

@InputType()
export class AnimeUpsertWithWhereUniqueWithoutThemesInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutThemesInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutThemesInput)
    update!: AnimeUpdateWithoutThemesInput;

    @Field(() => AnimeCreateWithoutThemesInput, {nullable:false})
    @Type(() => AnimeCreateWithoutThemesInput)
    create!: AnimeCreateWithoutThemesInput;
}
