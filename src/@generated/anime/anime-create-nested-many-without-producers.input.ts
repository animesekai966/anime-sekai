import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutProducersInput } from './anime-create-without-producers.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutProducersInput } from './anime-create-or-connect-without-producers.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@InputType()
export class AnimeCreateNestedManyWithoutProducersInput {

    @Field(() => [AnimeCreateWithoutProducersInput], {nullable:true})
    @Type(() => AnimeCreateWithoutProducersInput)
    create?: Array<AnimeCreateWithoutProducersInput>;

    @Field(() => [AnimeCreateOrConnectWithoutProducersInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutProducersInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutProducersInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: Array<AnimeWhereUniqueInput>;
}
