import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutStudiosInput } from './anime-update-without-studios.input';

@InputType()
export class AnimeUpdateWithWhereUniqueWithoutStudiosInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutStudiosInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutStudiosInput)
    data!: AnimeUpdateWithoutStudiosInput;
}
