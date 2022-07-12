import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutProducersInput } from './anime-update-without-producers.input';

@InputType()
export class AnimeUpdateWithWhereUniqueWithoutProducersInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutProducersInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutProducersInput)
    data!: AnimeUpdateWithoutProducersInput;
}
