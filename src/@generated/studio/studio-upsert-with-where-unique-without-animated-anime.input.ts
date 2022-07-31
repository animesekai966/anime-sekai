import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioUpdateWithoutAnimatedAnimeInput } from './studio-update-without-animated-anime.input';
import { StudioCreateWithoutAnimatedAnimeInput } from './studio-create-without-animated-anime.input';

@InputType()
export class StudioUpsertWithWhereUniqueWithoutAnimatedAnimeInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioUpdateWithoutAnimatedAnimeInput, {nullable:false})
    @Type(() => StudioUpdateWithoutAnimatedAnimeInput)
    update!: StudioUpdateWithoutAnimatedAnimeInput;

    @Field(() => StudioCreateWithoutAnimatedAnimeInput, {nullable:false})
    @Type(() => StudioCreateWithoutAnimatedAnimeInput)
    create!: StudioCreateWithoutAnimatedAnimeInput;
}
