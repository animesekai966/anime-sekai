import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeStudioUpdateWithoutAnimesProducedInput } from './anime-studio-update-without-animes-produced.input';
import { AnimeStudioCreateWithoutAnimesProducedInput } from './anime-studio-create-without-animes-produced.input';

@InputType()
export class AnimeStudioUpsertWithWhereUniqueWithoutAnimesProducedInput {

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:false})
    @Type(() => AnimeStudioWhereUniqueInput)
    where!: AnimeStudioWhereUniqueInput;

    @Field(() => AnimeStudioUpdateWithoutAnimesProducedInput, {nullable:false})
    @Type(() => AnimeStudioUpdateWithoutAnimesProducedInput)
    update!: AnimeStudioUpdateWithoutAnimesProducedInput;

    @Field(() => AnimeStudioCreateWithoutAnimesProducedInput, {nullable:false})
    @Type(() => AnimeStudioCreateWithoutAnimesProducedInput)
    create!: AnimeStudioCreateWithoutAnimesProducedInput;
}
