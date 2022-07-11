import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeUpdateWithoutStudiosInput } from './anime-update-without-studios.input';
import { AnimeCreateWithoutStudiosInput } from './anime-create-without-studios.input';

@InputType()
export class AnimeUpsertWithWhereUniqueWithoutStudiosInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutStudiosInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutStudiosInput)
    update!: AnimeUpdateWithoutStudiosInput;

    @Field(() => AnimeCreateWithoutStudiosInput, {nullable:false})
    @Type(() => AnimeCreateWithoutStudiosInput)
    create!: AnimeCreateWithoutStudiosInput;
}
