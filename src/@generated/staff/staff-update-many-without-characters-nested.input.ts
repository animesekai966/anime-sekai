import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutCharactersInput } from './staff-create-without-characters.input';
import { Type } from 'class-transformer';
import { StaffCreateOrConnectWithoutCharactersInput } from './staff-create-or-connect-without-characters.input';
import { StaffUpsertWithWhereUniqueWithoutCharactersInput } from './staff-upsert-with-where-unique-without-characters.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithWhereUniqueWithoutCharactersInput } from './staff-update-with-where-unique-without-characters.input';
import { StaffUpdateManyWithWhereWithoutCharactersInput } from './staff-update-many-with-where-without-characters.input';
import { StaffScalarWhereInput } from './staff-scalar-where.input';

@InputType()
export class StaffUpdateManyWithoutCharactersNestedInput {

    @Field(() => [StaffCreateWithoutCharactersInput], {nullable:true})
    @Type(() => StaffCreateWithoutCharactersInput)
    create?: Array<StaffCreateWithoutCharactersInput>;

    @Field(() => [StaffCreateOrConnectWithoutCharactersInput], {nullable:true})
    @Type(() => StaffCreateOrConnectWithoutCharactersInput)
    connectOrCreate?: Array<StaffCreateOrConnectWithoutCharactersInput>;

    @Field(() => [StaffUpsertWithWhereUniqueWithoutCharactersInput], {nullable:true})
    @Type(() => StaffUpsertWithWhereUniqueWithoutCharactersInput)
    upsert?: Array<StaffUpsertWithWhereUniqueWithoutCharactersInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    set?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    disconnect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    delete?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    connect?: Array<StaffWhereUniqueInput>;

    @Field(() => [StaffUpdateWithWhereUniqueWithoutCharactersInput], {nullable:true})
    @Type(() => StaffUpdateWithWhereUniqueWithoutCharactersInput)
    update?: Array<StaffUpdateWithWhereUniqueWithoutCharactersInput>;

    @Field(() => [StaffUpdateManyWithWhereWithoutCharactersInput], {nullable:true})
    @Type(() => StaffUpdateManyWithWhereWithoutCharactersInput)
    updateMany?: Array<StaffUpdateManyWithWhereWithoutCharactersInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    @Type(() => StaffScalarWhereInput)
    deleteMany?: Array<StaffScalarWhereInput>;
}
