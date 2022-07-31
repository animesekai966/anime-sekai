import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioUpdateWithoutAnimatedAnimeInput } from './studio-update-without-animated-anime.input';

@InputType()
export class StudioUpdateWithWhereUniqueWithoutAnimatedAnimeInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioUpdateWithoutAnimatedAnimeInput, {nullable:false})
    @Type(() => StudioUpdateWithoutAnimatedAnimeInput)
    data!: StudioUpdateWithoutAnimatedAnimeInput;
}
