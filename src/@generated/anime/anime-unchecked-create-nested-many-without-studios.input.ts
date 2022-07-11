import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutStudiosInput } from './anime-create-without-studios.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutStudiosInput } from './anime-create-or-connect-without-studios.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@InputType()
export class AnimeUncheckedCreateNestedManyWithoutStudiosInput {

    @Field(() => [AnimeCreateWithoutStudiosInput], {nullable:true})
    @Type(() => AnimeCreateWithoutStudiosInput)
    create?: Array<AnimeCreateWithoutStudiosInput>;

    @Field(() => [AnimeCreateOrConnectWithoutStudiosInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutStudiosInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutStudiosInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: Array<AnimeWhereUniqueInput>;
}
