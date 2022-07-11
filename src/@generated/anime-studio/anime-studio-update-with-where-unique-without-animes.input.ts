import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeStudioUpdateWithoutAnimesInput } from './anime-studio-update-without-animes.input';

@InputType()
export class AnimeStudioUpdateWithWhereUniqueWithoutAnimesInput {

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:false})
    @Type(() => AnimeStudioWhereUniqueInput)
    where!: AnimeStudioWhereUniqueInput;

    @Field(() => AnimeStudioUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeStudioUpdateWithoutAnimesInput)
    data!: AnimeStudioUpdateWithoutAnimesInput;
}
