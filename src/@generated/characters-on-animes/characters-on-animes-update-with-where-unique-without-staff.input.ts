import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesUpdateWithoutStaffInput } from './characters-on-animes-update-without-staff.input';

@InputType()
export class CharactersOnAnimesUpdateWithWhereUniqueWithoutStaffInput {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesUpdateWithoutStaffInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateWithoutStaffInput)
    data!: CharactersOnAnimesUpdateWithoutStaffInput;
}
