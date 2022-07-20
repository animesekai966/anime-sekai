import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioUpdateWithoutProducedAnimesInput } from './studio-update-without-produced-animes.input';

@InputType()
export class StudioUpdateWithWhereUniqueWithoutProducedAnimesInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioUpdateWithoutProducedAnimesInput, {nullable:false})
    @Type(() => StudioUpdateWithoutProducedAnimesInput)
    data!: StudioUpdateWithoutProducedAnimesInput;
}
