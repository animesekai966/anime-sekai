import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutThemesInput } from './anime-create-without-themes.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutThemesInput } from './anime-create-or-connect-without-themes.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@InputType()
export class AnimeCreateNestedManyWithoutThemesInput {

    @Field(() => [AnimeCreateWithoutThemesInput], {nullable:true})
    @Type(() => AnimeCreateWithoutThemesInput)
    create?: Array<AnimeCreateWithoutThemesInput>;

    @Field(() => [AnimeCreateOrConnectWithoutThemesInput], {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutThemesInput)
    connectOrCreate?: Array<AnimeCreateOrConnectWithoutThemesInput>;

    @Field(() => [AnimeWhereUniqueInput], {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: Array<AnimeWhereUniqueInput>;
}
