import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeCreateWithoutAnimeInput } from './staff-on-anime-create-without-anime.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeCreateOrConnectWithoutAnimeInput } from './staff-on-anime-create-or-connect-without-anime.input';
import { StaffOnAnimeUpsertWithWhereUniqueWithoutAnimeInput } from './staff-on-anime-upsert-with-where-unique-without-anime.input';
import { StaffOnAnimeCreateManyAnimeInputEnvelope } from './staff-on-anime-create-many-anime-input-envelope.input';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { StaffOnAnimeUpdateWithWhereUniqueWithoutAnimeInput } from './staff-on-anime-update-with-where-unique-without-anime.input';
import { StaffOnAnimeUpdateManyWithWhereWithoutAnimeInput } from './staff-on-anime-update-many-with-where-without-anime.input';
import { StaffOnAnimeScalarWhereInput } from './staff-on-anime-scalar-where.input';

@InputType()
export class StaffOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput {

    @Field(() => [StaffOnAnimeCreateWithoutAnimeInput], {nullable:true})
    @Type(() => StaffOnAnimeCreateWithoutAnimeInput)
    create?: Array<StaffOnAnimeCreateWithoutAnimeInput>;

    @Field(() => [StaffOnAnimeCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => StaffOnAnimeCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<StaffOnAnimeCreateOrConnectWithoutAnimeInput>;

    @Field(() => [StaffOnAnimeUpsertWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => StaffOnAnimeUpsertWithWhereUniqueWithoutAnimeInput)
    upsert?: Array<StaffOnAnimeUpsertWithWhereUniqueWithoutAnimeInput>;

    @Field(() => StaffOnAnimeCreateManyAnimeInputEnvelope, {nullable:true})
    @Type(() => StaffOnAnimeCreateManyAnimeInputEnvelope)
    createMany?: StaffOnAnimeCreateManyAnimeInputEnvelope;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    set?: Array<StaffOnAnimeWhereUniqueInput>;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    disconnect?: Array<StaffOnAnimeWhereUniqueInput>;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    delete?: Array<StaffOnAnimeWhereUniqueInput>;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    connect?: Array<StaffOnAnimeWhereUniqueInput>;

    @Field(() => [StaffOnAnimeUpdateWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => StaffOnAnimeUpdateWithWhereUniqueWithoutAnimeInput)
    update?: Array<StaffOnAnimeUpdateWithWhereUniqueWithoutAnimeInput>;

    @Field(() => [StaffOnAnimeUpdateManyWithWhereWithoutAnimeInput], {nullable:true})
    @Type(() => StaffOnAnimeUpdateManyWithWhereWithoutAnimeInput)
    updateMany?: Array<StaffOnAnimeUpdateManyWithWhereWithoutAnimeInput>;

    @Field(() => [StaffOnAnimeScalarWhereInput], {nullable:true})
    @Type(() => StaffOnAnimeScalarWhereInput)
    deleteMany?: Array<StaffOnAnimeScalarWhereInput>;
}
