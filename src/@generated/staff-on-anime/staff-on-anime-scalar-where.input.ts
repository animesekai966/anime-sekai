import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @HideField()
    relationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @HideField()
    animeId?: StringFilter;

    @HideField()
    staffId?: StringFilter;
}
