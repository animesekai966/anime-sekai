import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeStudioCreateWithoutAnimesProducedInput } from './anime-studio-create-without-animes-produced.input';

@InputType()
export class AnimeStudioCreateOrConnectWithoutAnimesProducedInput {

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:false})
    @Type(() => AnimeStudioWhereUniqueInput)
    where!: AnimeStudioWhereUniqueInput;

    @Field(() => AnimeStudioCreateWithoutAnimesProducedInput, {nullable:false})
    @Type(() => AnimeStudioCreateWithoutAnimesProducedInput)
    create!: AnimeStudioCreateWithoutAnimesProducedInput;
}
