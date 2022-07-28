import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeCreateInput } from './staff-on-anime-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStaffOnAnimeArgs {

    @Field(() => StaffOnAnimeCreateInput, {nullable:false})
    @Type(() => StaffOnAnimeCreateInput)
    data!: StaffOnAnimeCreateInput;
}
