import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioCreateWithoutAnimatedAnimesInput } from './studio-create-without-animated-animes.input';
import { Type } from 'class-transformer';
import { StudioCreateOrConnectWithoutAnimatedAnimesInput } from './studio-create-or-connect-without-animated-animes.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';

@InputType()
export class StudioCreateNestedManyWithoutAnimatedAnimesInput {

    @Field(() => [StudioCreateWithoutAnimatedAnimesInput], {nullable:true})
    @Type(() => StudioCreateWithoutAnimatedAnimesInput)
    create?: Array<StudioCreateWithoutAnimatedAnimesInput>;

    @Field(() => [StudioCreateOrConnectWithoutAnimatedAnimesInput], {nullable:true})
    @Type(() => StudioCreateOrConnectWithoutAnimatedAnimesInput)
    connectOrCreate?: Array<StudioCreateOrConnectWithoutAnimatedAnimesInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    connect?: Array<StudioWhereUniqueInput>;
}
