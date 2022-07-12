import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutProducersInput } from './anime-update-without-producers.input';
import { AnimeCreateWithoutProducersInput } from './anime-create-without-producers.input';

@InputType()
export class AnimeUpsertWithWhereUniqueWithoutProducersInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutProducersInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutProducersInput)
    update!: AnimeUpdateWithoutProducersInput;

    @Field(() => AnimeCreateWithoutProducersInput, {nullable:false})
    @Type(() => AnimeCreateWithoutProducersInput)
    create!: AnimeCreateWithoutProducersInput;
}
