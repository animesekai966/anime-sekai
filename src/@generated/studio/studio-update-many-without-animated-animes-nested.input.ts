import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioCreateWithoutAnimatedAnimesInput } from './studio-create-without-animated-animes.input';
import { Type } from 'class-transformer';
import { StudioCreateOrConnectWithoutAnimatedAnimesInput } from './studio-create-or-connect-without-animated-animes.input';
import { StudioUpsertWithWhereUniqueWithoutAnimatedAnimesInput } from './studio-upsert-with-where-unique-without-animated-animes.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { StudioUpdateWithWhereUniqueWithoutAnimatedAnimesInput } from './studio-update-with-where-unique-without-animated-animes.input';
import { StudioUpdateManyWithWhereWithoutAnimatedAnimesInput } from './studio-update-many-with-where-without-animated-animes.input';
import { StudioScalarWhereInput } from './studio-scalar-where.input';

@InputType()
export class StudioUpdateManyWithoutAnimatedAnimesNestedInput {

    @Field(() => [StudioCreateWithoutAnimatedAnimesInput], {nullable:true})
    @Type(() => StudioCreateWithoutAnimatedAnimesInput)
    create?: Array<StudioCreateWithoutAnimatedAnimesInput>;

    @Field(() => [StudioCreateOrConnectWithoutAnimatedAnimesInput], {nullable:true})
    @Type(() => StudioCreateOrConnectWithoutAnimatedAnimesInput)
    connectOrCreate?: Array<StudioCreateOrConnectWithoutAnimatedAnimesInput>;

    @Field(() => [StudioUpsertWithWhereUniqueWithoutAnimatedAnimesInput], {nullable:true})
    @Type(() => StudioUpsertWithWhereUniqueWithoutAnimatedAnimesInput)
    upsert?: Array<StudioUpsertWithWhereUniqueWithoutAnimatedAnimesInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    set?: Array<StudioWhereUniqueInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    disconnect?: Array<StudioWhereUniqueInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    delete?: Array<StudioWhereUniqueInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    connect?: Array<StudioWhereUniqueInput>;

    @Field(() => [StudioUpdateWithWhereUniqueWithoutAnimatedAnimesInput], {nullable:true})
    @Type(() => StudioUpdateWithWhereUniqueWithoutAnimatedAnimesInput)
    update?: Array<StudioUpdateWithWhereUniqueWithoutAnimatedAnimesInput>;

    @Field(() => [StudioUpdateManyWithWhereWithoutAnimatedAnimesInput], {nullable:true})
    @Type(() => StudioUpdateManyWithWhereWithoutAnimatedAnimesInput)
    updateMany?: Array<StudioUpdateManyWithWhereWithoutAnimatedAnimesInput>;

    @Field(() => [StudioScalarWhereInput], {nullable:true})
    @Type(() => StudioScalarWhereInput)
    deleteMany?: Array<StudioScalarWhereInput>;
}
