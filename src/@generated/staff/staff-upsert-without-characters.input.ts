import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateWithoutCharactersInput } from './staff-update-without-characters.input';
import { Type } from 'class-transformer';
import { StaffCreateWithoutCharactersInput } from './staff-create-without-characters.input';

@InputType()
export class StaffUpsertWithoutCharactersInput {

    @Field(() => StaffUpdateWithoutCharactersInput, {nullable:false})
    @Type(() => StaffUpdateWithoutCharactersInput)
    update!: StaffUpdateWithoutCharactersInput;

    @Field(() => StaffCreateWithoutCharactersInput, {nullable:false})
    @Type(() => StaffCreateWithoutCharactersInput)
    create!: StaffCreateWithoutCharactersInput;
}
