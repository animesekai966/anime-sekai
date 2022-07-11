import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioCreateWithoutAnimesInput } from './anime-studio-create-without-animes.input';
import { Type } from 'class-transformer';
import { AnimeStudioCreateOrConnectWithoutAnimesInput } from './anime-studio-create-or-connect-without-animes.input';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';

@InputType()
export class AnimeStudioUncheckedCreateNestedManyWithoutAnimesInput {

    @Field(() => [AnimeStudioCreateWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeStudioCreateWithoutAnimesInput)
    create?: Array<AnimeStudioCreateWithoutAnimesInput>;

    @Field(() => [AnimeStudioCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => AnimeStudioCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<AnimeStudioCreateOrConnectWithoutAnimesInput>;

    @Field(() => [AnimeStudioWhereUniqueInput], {nullable:true})
    @Type(() => AnimeStudioWhereUniqueInput)
    connect?: Array<AnimeStudioWhereUniqueInput>;
}
