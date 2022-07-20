import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioCreateWithoutAnimatedAnimesInput } from './studio-create-without-animated-animes.input';

@InputType()
export class StudioCreateOrConnectWithoutAnimatedAnimesInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioCreateWithoutAnimatedAnimesInput, {nullable:false})
    @Type(() => StudioCreateWithoutAnimatedAnimesInput)
    create!: StudioCreateWithoutAnimatedAnimesInput;
}
