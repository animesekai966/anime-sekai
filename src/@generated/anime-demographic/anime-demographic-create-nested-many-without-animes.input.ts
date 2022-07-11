import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDemographicCreateWithoutAnimesInput } from './anime-demographic-create-without-animes.input';
import { Type } from 'class-transformer';
import { AnimeDemographicCreateOrConnectWithoutAnimesInput } from './anime-demographic-create-or-connect-without-animes.input';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';

@InputType()
export class AnimeDemographicCreateNestedManyWithoutAnimesInput {

    @Field(() => [AnimeDemographicCreateWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeDemographicCreateWithoutAnimesInput)
    create?: Array<AnimeDemographicCreateWithoutAnimesInput>;

    @Field(() => [AnimeDemographicCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeDemographicCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<AnimeDemographicCreateOrConnectWithoutAnimesInput>;

    @Field(() => [AnimeDemographicWhereUniqueInput], {nullable:true})
    @Type(() => AnimeDemographicWhereUniqueInput)
    connect?: Array<AnimeDemographicWhereUniqueInput>;
}
