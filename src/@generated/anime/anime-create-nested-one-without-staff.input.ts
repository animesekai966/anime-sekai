import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateWithoutStaffInput } from './anime-create-without-staff.input';
import { Type } from 'class-transformer';
import { AnimeCreateOrConnectWithoutStaffInput } from './anime-create-or-connect-without-staff.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@InputType()
export class AnimeCreateNestedOneWithoutStaffInput {

    @Field(() => AnimeCreateWithoutStaffInput, {nullable:true})
    @Type(() => AnimeCreateWithoutStaffInput)
    create?: AnimeCreateWithoutStaffInput;

    @Field(() => AnimeCreateOrConnectWithoutStaffInput, {nullable:true})
    @Type(() => AnimeCreateOrConnectWithoutStaffInput)
    connectOrCreate?: AnimeCreateOrConnectWithoutStaffInput;

    @Field(() => AnimeWhereUniqueInput, {nullable:true})
    @Type(() => AnimeWhereUniqueInput)
    connect?: AnimeWhereUniqueInput;
}
