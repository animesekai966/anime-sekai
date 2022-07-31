import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioCreateWithoutProducedAnimeInput } from './studio-create-without-produced-anime.input';

@InputType()
export class StudioCreateOrConnectWithoutProducedAnimeInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioCreateWithoutProducedAnimeInput, {nullable:false})
    @Type(() => StudioCreateWithoutProducedAnimeInput)
    create!: StudioCreateWithoutProducedAnimeInput;
}
