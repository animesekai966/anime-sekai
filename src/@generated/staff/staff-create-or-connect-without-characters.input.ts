import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { Type } from 'class-transformer';
import { StaffCreateWithoutCharactersInput } from './staff-create-without-characters.input';

@InputType()
export class StaffCreateOrConnectWithoutCharactersInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    @Type(() => StaffWhereUniqueInput)
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutCharactersInput, {nullable:false})
    @Type(() => StaffCreateWithoutCharactersInput)
    create!: StaffCreateWithoutCharactersInput;
}
