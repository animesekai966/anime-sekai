import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutGenresInput } from './anime-create-without-genres.input';

@InputType()
export class AnimeCreateOrConnectWithoutGenresInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeCreateWithoutGenresInput, {nullable:false})
    @Type(() => AnimeCreateWithoutGenresInput)
    create!: AnimeCreateWithoutGenresInput;
}
