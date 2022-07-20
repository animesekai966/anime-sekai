import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutCharactersInput } from './anime-create-without-characters.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutCharactersInput } from './anime-create-or-connect-without-characters.input';
import { AnimeUpsertWithoutCharactersInput } from './anime-upsert-without-characters.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { AnimeUpdateWithoutCharactersInput } from './anime-update-without-characters.input';

@InputType()
export class AnimeUpdateOneRequiredWithoutCharactersNestedInput {

    @Field(() => AnimeCreateWithoutCharactersInput, {nullable:true})
    @Type(() => AnimeCreateWithoutCharactersInput)
    create?: AnimeCreateWithoutCharactersInput;

    @Field(() => AnimeCreateOrConnectWithoutCharactersInput, {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutCharactersInput)
    connectOrCreate?: AnimeCreateOrConnectWithoutCharactersInput;

    @Field(() => AnimeUpsertWithoutCharactersInput, {nullable:true})
    @Type(() => AnimeUpsertWithoutCharactersInput)
    upsert?: AnimeUpsertWithoutCharactersInput;

    @Field(() => AnimeWhereUniqueInput, {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutCharactersInput, {nullable:true})
    @Type(() => AnimeUpdateWithoutCharactersInput)
    update?: AnimeUpdateWithoutCharactersInput;
}
