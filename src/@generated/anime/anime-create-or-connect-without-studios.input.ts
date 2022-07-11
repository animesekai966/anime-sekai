import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutStudiosInput } from './anime-create-without-studios.input';

@InputType()
export class AnimeCreateOrConnectWithoutStudiosInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeCreateWithoutStudiosInput, {nullable:false})
    @Type(() => AnimeCreateWithoutStudiosInput)
    create!: AnimeCreateWithoutStudiosInput;
}
