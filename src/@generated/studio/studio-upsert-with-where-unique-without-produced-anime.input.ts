import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Type } from 'class-transformer';
import { StudioUpdateWithoutProducedAnimeInput } from './studio-update-without-produced-anime.input';
import { StudioCreateWithoutProducedAnimeInput } from './studio-create-without-produced-anime.input';

@InputType()
export class StudioUpsertWithWhereUniqueWithoutProducedAnimeInput {

    @Field(() => StudioWhereUniqueInput, {nullable:false})
    @Type(() => StudioWhereUniqueInput)
    where!: StudioWhereUniqueInput;

    @Field(() => StudioUpdateWithoutProducedAnimeInput, {nullable:false})
    @Type(() => StudioUpdateWithoutProducedAnimeInput)
    update!: StudioUpdateWithoutProducedAnimeInput;

    @Field(() => StudioCreateWithoutProducedAnimeInput, {nullable:false})
    @Type(() => StudioCreateWithoutProducedAnimeInput)
    create!: StudioCreateWithoutProducedAnimeInput;
}
