import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeUpdateWithoutStaffInput } from './anime-update-without-staff.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutStaffInput } from './anime-create-without-staff.input';

@InputType()
export class AnimeUpsertWithoutStaffInput {

    @Field(() => AnimeUpdateWithoutStaffInput, {nullable:false})
    @Type(() => AnimeUpdateWithoutStaffInput)
    update!: AnimeUpdateWithoutStaffInput;

    @Field(() => AnimeCreateWithoutStaffInput, {nullable:false})
    @Type(() => AnimeCreateWithoutStaffInput)
    create!: AnimeCreateWithoutStaffInput;
}
