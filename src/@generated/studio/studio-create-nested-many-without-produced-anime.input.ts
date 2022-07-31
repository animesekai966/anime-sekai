import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StudioCreateWithoutProducedAnimeInput } from './studio-create-without-produced-anime.input';
import { Type } from 'class-transformer';
import { StudioCreateOrConnectWithoutProducedAnimeInput } from './studio-create-or-connect-without-produced-anime.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';

@InputType()
export class StudioCreateNestedManyWithoutProducedAnimeInput {

    @Field(() => [StudioCreateWithoutProducedAnimeInput], {nullable:true})
    @Type(() => StudioCreateWithoutProducedAnimeInput)
    create?: Array<StudioCreateWithoutProducedAnimeInput>;

    @Field(() => [StudioCreateOrConnectWithoutProducedAnimeInput], {nullable:true})
    @Type(() => StudioCreateOrConnectWithoutProducedAnimeInput)
    connectOrCreate?: Array<StudioCreateOrConnectWithoutProducedAnimeInput>;

    @Field(() => [StudioWhereUniqueInput], {nullable:true})
    @Type(() => StudioWhereUniqueInput)
    connect?: Array<StudioWhereUniqueInput>;
}
