import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutCharactersInput } from './anime-create-without-characters.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutCharactersInput } from './anime-create-or-connect-without-characters.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@InputType()
export class AnimeCreateNestedOneWithoutCharactersInput {

    @Field(() => AnimeCreateWithoutCharactersInput, {nullable:true})
    @Type(() => AnimeCreateWithoutCharactersInput)
    create?: AnimeCreateWithoutCharactersInput;

    @Field(() => AnimeCreateOrConnectWithoutCharactersInput, {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutCharactersInput)
    connectOrCreate?: AnimeCreateOrConnectWithoutCharactersInput;

    @Field(() => AnimeWhereUniqueInput, {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: AnimeWhereUniqueInput;
}
