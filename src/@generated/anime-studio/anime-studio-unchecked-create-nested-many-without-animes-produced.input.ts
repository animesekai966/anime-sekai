import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioCreateWithoutAnimesProducedInput } from './anime-studio-create-without-animes-produced.input';
import { Type } from 'class-transformer';
import { AnimeStudioCreateOrConnectWithoutAnimesProducedInput } from './anime-studio-create-or-connect-without-animes-produced.input';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';

@InputType()
export class AnimeStudioUncheckedCreateNestedManyWithoutAnimesProducedInput {

    @Field(() => [AnimeStudioCreateWithoutAnimesProducedInput], {nullable:true})
    @Type(() => AnimeStudioCreateWithoutAnimesProducedInput)
    create?: Array<AnimeStudioCreateWithoutAnimesProducedInput>;

    @Field(() => [AnimeStudioCreateOrConnectWithoutAnimesProducedInput], {nullable:true})
    @Type(() => AnimeStudioCreateOrConnectWithoutAnimesProducedInput)
    connectOrCreate?: Array<AnimeStudioCreateOrConnectWithoutAnimesProducedInput>;

    @Field(() => [AnimeStudioWhereUniqueInput], {nullable:true})
    @Type(() => AnimeStudioWhereUniqueInput)
    connect?: Array<AnimeStudioWhereUniqueInput>;
}
