import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioCreateWithoutAnimatedAnimeInput } from './studio-create-without-animated-anime.input';

@InputType()
export class StudioCreateOrConnectWithoutAnimatedAnimeInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioCreateWithoutAnimatedAnimeInput, {nullable:false})
    @Type(() => StudioCreateWithoutAnimatedAnimeInput)
    create!: StudioCreateWithoutAnimatedAnimeInput;
}
