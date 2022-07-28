import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeCreateManyStaffInput } from './staff-on-anime-create-many-staff.input';
import { Type } from 'class-transformer';

@InputType()
export class StaffOnAnimeCreateManyStaffInputEnvelope {

    @Field(() => [StaffOnAnimeCreateManyStaffInput], {nullable:false})
    @Type(() => StaffOnAnimeCreateManyStaffInput)
    data!: Array<StaffOnAnimeCreateManyStaffInput>;
}
