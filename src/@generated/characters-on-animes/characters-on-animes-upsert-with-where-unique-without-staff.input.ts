import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesUpdateWithoutStaffInput } from './characters-on-animes-update-without-staff.input';
import { CharactersOnAnimesCreateWithoutStaffInput } from './characters-on-animes-create-without-staff.input';

@InputType()
export class CharactersOnAnimesUpsertWithWhereUniqueWithoutStaffInput {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesUpdateWithoutStaffInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateWithoutStaffInput)
    update!: CharactersOnAnimesUpdateWithoutStaffInput;

    @Field(() => CharactersOnAnimesCreateWithoutStaffInput, {nullable:false})
    @Type(() => CharactersOnAnimesCreateWithoutStaffInput)
    create!: CharactersOnAnimesCreateWithoutStaffInput;
}
