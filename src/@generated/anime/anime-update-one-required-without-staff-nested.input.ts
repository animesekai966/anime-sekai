import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutStaffInput } from './anime-create-without-staff.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutStaffInput } from './anime-create-or-connect-without-staff.input';
import { AnimeUpsertWithoutStaffInput } from './anime-upsert-without-staff.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { AnimeUpdateWithoutStaffInput } from './anime-update-without-staff.input';

@InputType()
export class AnimeUpdateOneRequiredWithoutStaffNestedInput {

    @Field(() => AnimeCreateWithoutStaffInput, {nullable:true})
    @Type(() => AnimeCreateWithoutStaffInput)
    create?: AnimeCreateWithoutStaffInput;

    @Field(() => AnimeCreateOrConnectWithoutStaffInput, {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutStaffInput)
    connectOrCreate?: AnimeCreateOrConnectWithoutStaffInput;

    @Field(() => AnimeUpsertWithoutStaffInput, {nullable:true})
    @Type(() => AnimeUpsertWithoutStaffInput)
    upsert?: AnimeUpsertWithoutStaffInput;

    @Field(() => AnimeWhereUniqueInput, {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: AnimeWhereUniqueInput;

    @Field(() => AnimeUpdateWithoutStaffInput, {nullable:true})
    @Type(() => AnimeUpdateWithoutStaffInput)
    update?: AnimeUpdateWithoutStaffInput;
}
