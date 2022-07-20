import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioCreateWithoutProducedAnimesInput } from './studio-create-without-produced-animes.input';
import { Type } from 'class-transformer';
import { StudioCreateOrConnectWithoutProducedAnimesInput } from './studio-create-or-connect-without-produced-animes.input';
import { StudioUpsertWithWhereUniqueWithoutProducedAnimesInput } from './studio-upsert-with-where-unique-without-produced-animes.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { StudioUpdateWithWhereUniqueWithoutProducedAnimesInput } from './studio-update-with-where-unique-without-produced-animes.input';
import { StudioUpdateManyWithWhereWithoutProducedAnimesInput } from './studio-update-many-with-where-without-produced-animes.input';
import { StudioScalarWhereInput } from './studio-scalar-where.input';

@InputType()
export class StudioUpdateManyWithoutProducedAnimesNestedInput {

    @Field(() => [StudioCreateWithoutProducedAnimesInput], {nullable:true})
    @Type(() => StudioCreateWithoutProducedAnimesInput)
    create?: Array<StudioCreateWithoutProducedAnimesInput>;

    @Field(() => [StudioCreateOrConnectWithoutProducedAnimesInput], {nullable:true})
    @Type(() => StudioCreateOrConnectWithoutProducedAnimesInput)
    connectOrCreate?: Array<StudioCreateOrConnectWithoutProducedAnimesInput>;

    @Field(() => [StudioUpsertWithWhereUniqueWithoutProducedAnimesInput], {nullable:true})
    @Type(() => StudioUpsertWithWhereUniqueWithoutProducedAnimesInput)
    upsert?: Array<StudioUpsertWithWhereUniqueWithoutProducedAnimesInput>;

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

    @Field(() => [StudioUpdateWithWhereUniqueWithoutProducedAnimesInput], {nullable:true})
    @Type(() => StudioUpdateWithWhereUniqueWithoutProducedAnimesInput)
    update?: Array<StudioUpdateWithWhereUniqueWithoutProducedAnimesInput>;

    @Field(() => [StudioUpdateManyWithWhereWithoutProducedAnimesInput], {nullable:true})
    @Type(() => StudioUpdateManyWithWhereWithoutProducedAnimesInput)
    updateMany?: Array<StudioUpdateManyWithWhereWithoutProducedAnimesInput>;

    @Field(() => [StudioScalarWhereInput], {nullable:true})
    @Type(() => StudioScalarWhereInput)
    deleteMany?: Array<StudioScalarWhereInput>;
}
