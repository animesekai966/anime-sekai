import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeUpdateInput } from './staff-on-anime-update.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';

@ArgsType()
export class UpdateOneStaffOnAnimeArgs {

    @Field(() => StaffOnAnimeUpdateInput, {nullable:false})
    @Type(() => StaffOnAnimeUpdateInput)
    data!: StaffOnAnimeUpdateInput;

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    where!: StaffOnAnimeWhereUniqueInput;
}
