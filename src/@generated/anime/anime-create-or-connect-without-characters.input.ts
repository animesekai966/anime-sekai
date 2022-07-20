import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutCharactersInput } from './anime-create-without-characters.input';

@InputType()
export class AnimeCreateOrConnectWithoutCharactersInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeCreateWithoutCharactersInput, {nullable:false})
    @Type(() => AnimeCreateWithoutCharactersInput)
    create!: AnimeCreateWithoutCharactersInput;
}
