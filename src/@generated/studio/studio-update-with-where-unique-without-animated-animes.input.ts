import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioUpdateWithoutAnimatedAnimesInput } from './studio-update-without-animated-animes.input';

@InputType()
export class StudioUpdateWithWhereUniqueWithoutAnimatedAnimesInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioUpdateWithoutAnimatedAnimesInput, {nullable:false})
    @Type(() => StudioUpdateWithoutAnimatedAnimesInput)
    data!: StudioUpdateWithoutAnimatedAnimesInput;
}
