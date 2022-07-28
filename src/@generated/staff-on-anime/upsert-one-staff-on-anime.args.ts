import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeCreateInput } from './staff-on-anime-create.input';
import { StaffOnAnimeUpdateInput } from './staff-on-anime-update.input';

@ArgsType()
export class UpsertOneStaffOnAnimeArgs {

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    where!: StaffOnAnimeWhereUniqueInput;

    @Field(() => StaffOnAnimeCreateInput, {nullable:false})
    @Type(() => StaffOnAnimeCreateInput)
    create!: StaffOnAnimeCreateInput;

    @Field(() => StaffOnAnimeUpdateInput, {nullable:false})
    @Type(() => StaffOnAnimeUpdateInput)
    update!: StaffOnAnimeUpdateInput;
}
