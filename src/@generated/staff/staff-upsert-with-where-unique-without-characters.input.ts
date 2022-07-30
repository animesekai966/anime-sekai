import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { Type } from 'class-transformer';
import { StaffUpdateWithoutCharactersInput } from './staff-update-without-characters.input';
import { StaffCreateWithoutCharactersInput } from './staff-create-without-characters.input';

@InputType()
export class StaffUpsertWithWhereUniqueWithoutCharactersInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    @Type(() => StaffWhereUniqueInput)
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutCharactersInput, {nullable:false})
    @Type(() => StaffUpdateWithoutCharactersInput)
    update!: StaffUpdateWithoutCharactersInput;

    @Field(() => StaffCreateWithoutCharactersInput, {nullable:false})
    @Type(() => StaffCreateWithoutCharactersInput)
    create!: StaffCreateWithoutCharactersInput;
}
