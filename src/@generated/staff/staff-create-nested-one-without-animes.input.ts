import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutAnimesInput } from './staff-create-without-animes.input';
import { Type } from 'class-transformer';
import { StaffCreateOrConnectWithoutAnimesInput } from './staff-create-or-connect-without-animes.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffCreateNestedOneWithoutAnimesInput {

    @Field(() => StaffCreateWithoutAnimesInput, {nullable:true})
    @Type(() => StaffCreateWithoutAnimesInput)
    create?: StaffCreateWithoutAnimesInput;

    @Field(() => StaffCreateOrConnectWithoutAnimesInput, {nullable:true})
    @Type(() => StaffCreateOrConnectWithoutAnimesInput)
    connectOrCreate?: StaffCreateOrConnectWithoutAnimesInput;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    connect?: StaffWhereUniqueInput;
}
