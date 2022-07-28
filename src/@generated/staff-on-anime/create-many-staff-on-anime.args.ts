import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeCreateManyInput } from './staff-on-anime-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStaffOnAnimeArgs {

    @Field(() => [StaffOnAnimeCreateManyInput], {nullable:false})
    @Type(() => StaffOnAnimeCreateManyInput)
    data!: Array<StaffOnAnimeCreateManyInput>;
}
