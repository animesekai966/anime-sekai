import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioCreateWithoutProducedAnimesInput } from './studio-create-without-produced-animes.input';
import { Type } from 'class-transformer';
import { StudioCreateOrConnectWithoutProducedAnimesInput } from './studio-create-or-connect-without-produced-animes.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';

@InputType()
export class StudioUncheckedCreateNestedManyWithoutProducedAnimesInput {

    @Field(() => [StudioCreateWithoutProducedAnimesInput], {nullable:true})
    @Type(() => StudioCreateWithoutProducedAnimesInput)
    create?: Array<StudioCreateWithoutProducedAnimesInput>;

    @Field(() => [StudioCreateOrConnectWithoutProducedAnimesInput], {nullable:true})
    @Type(() => StudioCreateOrConnectWithoutProducedAnimesInput)
    connectOrCreate?: Array<StudioCreateOrConnectWithoutProducedAnimesInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    connect?: Array<StudioWhereUniqueInput>;
}
