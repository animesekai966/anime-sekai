import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeThemeCreateWithoutAnimesInput } from './anime-theme-create-without-animes.input';

@InputType()
export class AnimeThemeCreateOrConnectWithoutAnimesInput {

    @Field(() => AnimeThemeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeThemeWhereUniqueInput)
    where!: AnimeThemeWhereUniqueInput;

    @Field(() => AnimeThemeCreateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeThemeCreateWithoutAnimesInput)
    create!: AnimeThemeCreateWithoutAnimesInput;
}
