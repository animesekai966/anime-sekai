import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutGenresInput } from './anime-create-without-genres.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutGenresInput } from './anime-create-or-connect-without-genres.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@InputType()
export class AnimeUncheckedCreateNestedManyWithoutGenresInput {

    @Field(() => [AnimeCreateWithoutGenresInput], {nullable:true})
    @Type(() => AnimeCreateWithoutGenresInput)
    create?: Array<AnimeCreateWithoutGenresInput>;

    @Field(() => [AnimeCreateOrConnectWithoutGenresInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutGenresInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutGenresInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: Array<AnimeWhereUniqueInput>;
}
