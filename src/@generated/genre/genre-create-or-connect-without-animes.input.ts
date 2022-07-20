import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreCreateWithoutAnimesInput } from './genre-create-without-animes.input';

@InputType()
export class GenreCreateOrConnectWithoutAnimesInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: GenreWhereUniqueInput;

    @Field(() => GenreCreateWithoutAnimesInput, {nullable:false})
    @Type(() => GenreCreateWithoutAnimesInput)
    create!: GenreCreateWithoutAnimesInput;
}
