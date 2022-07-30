import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutCharactersInput } from './staff-create-without-characters.input';
import { Type } from 'class-transformer';
import { StaffCreateOrConnectWithoutCharactersInput } from './staff-create-or-connect-without-characters.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffUncheckedCreateNestedManyWithoutCharactersInput {

    @Field(() => [StaffCreateWithoutCharactersInput], {nullable:true})
    @Type(() => StaffCreateWithoutCharactersInput)
    create?: Array<StaffCreateWithoutCharactersInput>;

    @Field(() => [StaffCreateOrConnectWithoutCharactersInput], {nullable:true})
    @Type(() => StaffCreateOrConnectWithoutCharactersInput)
    connectOrCreate?: Array<StaffCreateOrConnectWithoutCharactersInput>;

    @Field(() => [StaffWhereUniqueInput], {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    connect?: Array<StaffWhereUniqueInput>;
}
