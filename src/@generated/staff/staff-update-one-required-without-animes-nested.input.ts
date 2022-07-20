import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutAnimesInput } from './staff-create-without-animes.input';
import { Type } from 'class-transformer';
import { StaffCreateOrConnectWithoutAnimesInput } from './staff-create-or-connect-without-animes.input';
import { StaffUpsertWithoutAnimesInput } from './staff-upsert-without-animes.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutAnimesInput } from './staff-update-without-animes.input';

@InputType()
export class StaffUpdateOneRequiredWithoutAnimesNestedInput {

    @Field(() => StaffCreateWithoutAnimesInput, {nullable:true})
    @Type(() => StaffCreateWithoutAnimesInput)
    create?: StaffCreateWithoutAnimesInput;

    @Field(() => StaffCreateOrConnectWithoutAnimesInput, {nullable:true})
    @Type(() => StaffCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: StaffCreateOrConnectWithoutAnimesInput;

    @Field(() => StaffUpsertWithoutAnimesInput, {nullable:true})
    @Type(() => StaffUpsertWithoutAnimesInput)
    upsert?: StaffUpsertWithoutAnimesInput;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    connect?: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutAnimesInput, {nullable:true})
    @Type(() => StaffUpdateWithoutAnimesInput)
    update?: StaffUpdateWithoutAnimesInput;
}
