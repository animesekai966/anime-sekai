import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeDemographicCreateWithoutAnimesInput } from './anime-demographic-create-without-animes.input';

@InputType()
export class AnimeDemographicCreateOrConnectWithoutAnimesInput {

    @Field(() => AnimeDemographicWhereUniqueInput, {nullable:false})
    @Type(() => AnimeDemographicWhereUniqueInput)
    where!: AnimeDemographicWhereUniqueInput;

    @Field(() => AnimeDemographicCreateWithoutAnimesInput, {nullable:false})
    @Type(() => AnimeDemographicCreateWithoutAnimesInput)
    create!: AnimeDemographicCreateWithoutAnimesInput;
}
