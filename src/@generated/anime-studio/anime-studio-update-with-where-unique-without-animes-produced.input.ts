import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeStudioUpdateWithoutAnimesProducedInput } from './anime-studio-update-without-animes-produced.input';

@InputType()
export class AnimeStudioUpdateWithWhereUniqueWithoutAnimesProducedInput {

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:false})
    @Type(() => AnimeStudioWhereUniqueInput)
    where!: AnimeStudioWhereUniqueInput;

    @Field(() => AnimeStudioUpdateWithoutAnimesProducedInput, {nullable:false})
    @Type(() => AnimeStudioUpdateWithoutAnimesProducedInput)
    data!: AnimeStudioUpdateWithoutAnimesProducedInput;
}
