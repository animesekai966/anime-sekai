import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutAnimesInput } from './genre-create-without-animes.input';
import { Type } from 'class-transformer';
import { GenreCreateOrConnectWithoutAnimesInput } from './genre-create-or-connect-without-animes.input';
import { GenreUpsertWithWhereUniqueWithoutAnimesInput } from './genre-upsert-with-where-unique-without-animes.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { GenreUpdateWithWhereUniqueWithoutAnimesInput } from './genre-update-with-where-unique-without-animes.input';
import { GenreUpdateManyWithWhereWithoutAnimesInput } from './genre-update-many-with-where-without-animes.input';
import { GenreScalarWhereInput } from './genre-scalar-where.input';

@InputType()
export class GenreUpdateManyWithoutAnimesNestedInput {

    @Field(() => [GenreCreateWithoutAnimesInput], {nullable:true})
    @Type(() => GenreCreateWithoutAnimesInput)
    create?: Array<GenreCreateWithoutAnimesInput>;

    @Field(() => [GenreCreateOrConnectWithoutAnimesInput], {nullable:true})
    @Type(() => GenreCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: Array<GenreCreateOrConnectWithoutAnimesInput>;

    @Field(() => [GenreUpsertWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => GenreUpsertWithWhereUniqueWithoutAnimesInput)
    upsert?: Array<GenreUpsertWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    set?: Array<GenreWhereUniqueInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    disconnect?: Array<GenreWhereUniqueInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    delete?: Array<GenreWhereUniqueInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    connect?: Array<GenreWhereUniqueInput>;

    @Field(() => [GenreUpdateWithWhereUniqueWithoutAnimesInput], {nullable:true})
    @Type(() => GenreUpdateWithWhereUniqueWithoutAnimesInput)
    update?: Array<GenreUpdateWithWhereUniqueWithoutAnimesInput>;

    @Field(() => [GenreUpdateManyWithWhereWithoutAnimesInput], {nullable:true})
    @Type(() => GenreUpdateManyWithWhereWithoutAnimesInput)
    updateMany?: Array<GenreUpdateManyWithWhereWithoutAnimesInput>;

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    @Type(() => GenreScalarWhereInput)
    deleteMany?: Array<GenreScalarWhereInput>;
}
