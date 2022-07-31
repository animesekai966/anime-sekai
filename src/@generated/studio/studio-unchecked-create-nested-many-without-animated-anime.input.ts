import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioCreateWithoutAnimatedAnimeInput } from './studio-create-without-animated-anime.input';
import { Type } from 'class-transformer';
import { StudioCreateOrConnectWithoutAnimatedAnimeInput } from './studio-create-or-connect-without-animated-anime.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';

@InputType()
export class StudioUncheckedCreateNestedManyWithoutAnimatedAnimeInput {

    @Field(() => [StudioCreateWithoutAnimatedAnimeInput], {nullable:true})
    @Type(() => StudioCreateWithoutAnimatedAnimeInput)
    create?: Array<StudioCreateWithoutAnimatedAnimeInput>;

    @Field(() => [StudioCreateOrConnectWithoutAnimatedAnimeInput], {nullable:true})
    @Type(() => StudioCreateOrConnectWithoutAnimatedAnimeInput)
    connectOrCreate?: Array<StudioCreateOrConnectWithoutAnimatedAnimeInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    connect?: Array<StudioWhereUniqueInput>;
}
