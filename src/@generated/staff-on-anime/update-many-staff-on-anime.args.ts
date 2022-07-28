import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeUpdateManyMutationInput } from './staff-on-anime-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeWhereInput } from './staff-on-anime-where.input';

@ArgsType()
export class UpdateManyStaffOnAnimeArgs {

    @Field(() => StaffOnAnimeUpdateManyMutationInput, {nullable:false})
    @Type(() => StaffOnAnimeUpdateManyMutationInput)
    data!: StaffOnAnimeUpdateManyMutationInput;

    @Field(() => StaffOnAnimeWhereInput, {nullable:true})
    @Type(() => StaffOnAnimeWhereInput)
    where?: StaffOnAnimeWhereInput;
}
