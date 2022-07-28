import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeScalarWhereInput } from './staff-on-anime-scalar-where.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeUpdateManyMutationInput } from './staff-on-anime-update-many-mutation.input';

@InputType()
export class StaffOnAnimeUpdateManyWithWhereWithoutAnimeInput {

    @Field(() => StaffOnAnimeScalarWhereInput, {nullable:false})
    @Type(() => StaffOnAnimeScalarWhereInput)
    where!: StaffOnAnimeScalarWhereInput;

    @Field(() => StaffOnAnimeUpdateManyMutationInput, {nullable:false})
    @Type(() => StaffOnAnimeUpdateManyMutationInput)
    data!: StaffOnAnimeUpdateManyMutationInput;
}
