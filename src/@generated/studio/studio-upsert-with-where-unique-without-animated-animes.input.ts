import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioUpdateWithoutAnimatedAnimesInput } from './studio-update-without-animated-animes.input';
import { StudioCreateWithoutAnimatedAnimesInput } from './studio-create-without-animated-animes.input';

@InputType()
export class StudioUpsertWithWhereUniqueWithoutAnimatedAnimesInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioUpdateWithoutAnimatedAnimesInput, {nullable:false})
    @Type(() => StudioUpdateWithoutAnimatedAnimesInput)
    update!: StudioUpdateWithoutAnimatedAnimesInput;

    @Field(() => StudioCreateWithoutAnimatedAnimesInput, {nullable:false})
    @Type(() => StudioCreateWithoutAnimatedAnimesInput)
    create!: StudioCreateWithoutAnimatedAnimesInput;
}
