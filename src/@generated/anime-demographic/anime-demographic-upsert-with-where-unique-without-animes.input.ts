import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeDemographicUpdateWithoutAnimesInput } from './anime-demographic-update-without-animes.input';
import { AnimeDemographicCreateWithoutAnimesInput } from './anime-demographic-create-without-animes.input';

@InputType()
export class AnimeDemographicUpsertWithWhereUniqueWithoutAnimesInput {

    @Field(() => AnimeDemographicWhereUniqueInput, {nullable:false})
    @Type(() => AnimeDemographicWhereUniqueInput)
    where!: AnimeDemographicWhereUniqueInput;

    @Field(() => AnimeDemographicUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeDemographicUpdateWithoutAnimesInput)
    update!: AnimeDemographicUpdateWithoutAnimesInput;

    @Field(() => AnimeDemographicCreateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeDemographicCreateWithoutAnimesInput)
    create!: AnimeDemographicCreateWithoutAnimesInput;
}
