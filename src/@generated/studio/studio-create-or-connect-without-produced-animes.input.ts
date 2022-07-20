import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioCreateWithoutProducedAnimesInput } from './studio-create-without-produced-animes.input';

@InputType()
export class StudioCreateOrConnectWithoutProducedAnimesInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioCreateWithoutProducedAnimesInput, {nullable:false})
    @Type(() => StudioCreateWithoutProducedAnimesInput)
    create!: StudioCreateWithoutProducedAnimesInput;
}
