import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutCharactersInput } from './staff-create-without-characters.input';
import { Type } from 'class-transformer';
import { StaffCreateOrConnectWithoutCharactersInput } from './staff-create-or-connect-without-characters.input';
import { StaffUpsertWithoutCharactersInput } from './staff-upsert-without-characters.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutCharactersInput } from './staff-update-without-characters.input';

@InputType()
export class StaffUpdateOneRequiredWithoutCharactersNestedInput {

    @Field(() => StaffCreateWithoutCharactersInput, {nullable:true})
    @Type(() => StaffCreateWithoutCharactersInput)
    create?: StaffCreateWithoutCharactersInput;

    @Field(() => StaffCreateOrConnectWithoutCharactersInput, {nullable:true})
    @Type(() => StaffCreateOrConnectWithoutCharactersInput)
    connectOrCreate?: StaffCreateOrConnectWithoutCharactersInput;

    @Field(() => StaffUpsertWithoutCharactersInput, {nullable:true})
    @Type(() => StaffUpsertWithoutCharactersInput)
    upsert?: StaffUpsertWithoutCharactersInput;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    connect?: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutCharactersInput, {nullable:true})
    @Type(() => StaffUpdateWithoutCharactersInput)
    update?: StaffUpdateWithoutCharactersInput;
}
