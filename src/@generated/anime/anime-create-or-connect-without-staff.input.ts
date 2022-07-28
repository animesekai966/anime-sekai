import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeCreateWithoutStaffInput } from './anime-create-without-staff.input';

@InputType()
export class AnimeCreateOrConnectWithoutStaffInput {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeCreateWithoutStaffInput, {nullable:false})
    @Type(() => AnimeCreateWithoutStaffInput)
    create!: AnimeCreateWithoutStaffInput;
}
