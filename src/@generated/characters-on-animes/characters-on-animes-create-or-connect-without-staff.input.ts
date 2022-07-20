import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateWithoutStaffInput } from './characters-on-animes-create-without-staff.input';

@InputType()
export class CharactersOnAnimesCreateOrConnectWithoutStaffInput {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesCreateWithoutStaffInput, {nullable:false})
    @Type(() => CharactersOnAnimesCreateWithoutStaffInput)
    create!: CharactersOnAnimesCreateWithoutStaffInput;
}
