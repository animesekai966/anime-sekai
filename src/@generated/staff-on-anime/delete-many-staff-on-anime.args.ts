import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeWhereInput } from './staff-on-anime-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStaffOnAnimeArgs {

    @Field(() => StaffOnAnimeWhereInput, {nullable:true})
    @Type(() => StaffOnAnimeWhereInput)
    where?: StaffOnAnimeWhereInput;
}
