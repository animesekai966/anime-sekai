import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutThemesInput } from './anime-update-without-themes.input';

@InputType()
export class AnimeUpdateWithWhereUniqueWithoutThemesInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutThemesInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutThemesInput)
    data!: AnimeUpdateWithoutThemesInput;
}
