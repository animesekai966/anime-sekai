import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class StaffOnAnimeScalarWhereInput {

    @Field(() => [StaffOnAnimeScalarWhereInput], {nullable:true})
    AND?: Array<StaffOnAnimeScalarWhereInput>;

    @Field(() => [StaffOnAnimeScalarWhereInput], {nullable:true})
    OR?: Array<StaffOnAnimeScalarWhereInput>;

    @Field(() => [StaffOnAnimeScalarWhereInput], {nullable:true})
    NOT?: Array<StaffOnAnimeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    relationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    animeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    staffId?: StringFilter;
}
