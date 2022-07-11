import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDemographicCreateWithoutAnimesInput } from './anime-demographic-create-without-animes.input';
import { Type } from 'class-transformer';
import { AnimeDemographicCreateOrConnectWithoutAnimesInput } from './anime-demographic-create-or-connect-without-animes.input';
import { AnimeDemographicUpsertWithWhereUniqueWithoutAnimesInput } from './anime-demographic-upsert-with-where-unique-without-animes.input';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';
import { AnimeDemographicUpdateWithWhereUniqueWithoutAnimesInput } from './anime-demographic-update-with-where-unique-without-animes.input';
import { AnimeDemographicUpdateManyWithWhereWithoutAnimesInput } from './anime-demographic-update-many-with-where-without-animes.input';
import { AnimeDemographicScalarWhereInput } from './anime-demographic-scalar-where.input';

@InputType()
export class AnimeDemographicUncheckedUpdateManyWithoutAnimesNestedInput {

    @Field(() => [AnimeDemographicCreateWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeDemographicCreateWithoutAnimesInput)
    create?: Array<AnimeDemographicCreateWithoutAnimesInput>;

    @Field(() => [AnimeDemographicCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeDemographicCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<AnimeDemographicCreateOrConnectWithoutAnimesInput>;

    @Field(() => [AnimeDemographicUpsertWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeDemographicUpsertWithWhereUniqueWithoutAnimesInput)
    upsert?: Array<AnimeDemographicUpsertWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [AnimeDemographicWhereUniqueInput], {nullable:true})
    @Type(() => AnimeDemographicWhereUniqueInput)
    set?: Array<AnimeDemographicWhereUniqueInput>;

    @Field(() => [AnimeDemographicWhereUniqueInput], {nullable:true})
    @Type(() => AnimeDemographicWhereUniqueInput)
    disconnect?: Array<AnimeDemographicWhereUniqueInput>;

    @Field(() => [AnimeDemographicWhereUniqueInput], {nullable:true})
    @Type(() => AnimeDemographicWhereUniqueInput)
    delete?: Array<AnimeDemographicWhereUniqueInput>;

    @Field(() => [AnimeDemographicWhereUniqueInput], {nullable:true})
    @Type(() => AnimeDemographicWhereUniqueInput)
    connect?: Array<AnimeDemographicWhereUniqueInput>;

    @Field(() => [AnimeDemographicUpdateWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeDemographicUpdateWithWhereUniqueWithoutAnimesInput)
    update?: Array<AnimeDemographicUpdateWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [AnimeDemographicUpdateManyWithWhereWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeDemographicUpdateManyWithWhereWithoutAnimesInput)
    updateMany?: Array<AnimeDemographicUpdateManyWithWhereWithoutAnimesInput>;

    @Field(() => [AnimeDemographicScalarWhereInput], {nullable:true})
    @Type(() => AnimeDemographicScalarWhereInput)
    deleteMany?: Array<AnimeDemographicScalarWhereInput>;
}
