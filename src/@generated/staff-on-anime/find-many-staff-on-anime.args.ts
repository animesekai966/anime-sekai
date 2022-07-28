import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeWhereInput } from './staff-on-anime-where.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeOrderByWithRelationInput } from './staff-on-anime-order-by-with-relation.input';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StaffOnAnimeScalarFieldEnum } from './staff-on-anime-scalar-field.enum';

@ArgsType()
export class FindManyStaffOnAnimeArgs {

    @Field(() => StaffOnAnimeWhereInput, {nullable:true})
    @Type(() => StaffOnAnimeWhereInput)
    where?: StaffOnAnimeWhereInput;

    @Field(() => [StaffOnAnimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StaffOnAnimeOrderByWithRelationInput>;

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:true})
    cursor?: StaffOnAnimeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StaffOnAnimeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StaffOnAnimeScalarFieldEnum>;
}
