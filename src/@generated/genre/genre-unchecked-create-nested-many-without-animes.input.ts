import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutAnimesInput } from './genre-create-without-animes.input';
import { Type } from 'class-transformer';
import { GenreCreateOrConnectWithoutAnimesInput } from './genre-create-or-connect-without-animes.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';

@InputType()
export class GenreUncheckedCreateNestedManyWithoutAnimesInput {

    @Field(() => [GenreCreateWithoutAnimesInput], {nullable:true})
    @Type(() => GenreCreateWithoutAnimesInput)
    create?: Array<GenreCreateWithoutAnimesInput>;

    @Field(() => [GenreCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => GenreCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<GenreCreateOrConnectWithoutAnimesInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    connect?: Array<GenreWhereUniqueInput>;
}
