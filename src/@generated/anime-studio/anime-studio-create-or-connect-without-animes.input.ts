import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeStudioCreateWithoutAnimesInput } from './anime-studio-create-without-animes.input';

@InputType()
export class AnimeStudioCreateOrConnectWithoutAnimesInput {

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:false})
    @Type(() => AnimeStudioWhereUniqueInput)
    where!: AnimeStudioWhereUniqueInput;

    @Field(() => AnimeStudioCreateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeStudioCreateWithoutAnimesInput)
    create!: AnimeStudioCreateWithoutAnimesInput;
}
