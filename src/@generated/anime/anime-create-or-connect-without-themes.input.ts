import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutThemesInput } from './anime-create-without-themes.input';

@InputType()
export class AnimeCreateOrConnectWithoutThemesInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeCreateWithoutThemesInput, {nullable:false})
    @Type(() => AnimeCreateWithoutThemesInput)
    create!: AnimeCreateWithoutThemesInput;
}
