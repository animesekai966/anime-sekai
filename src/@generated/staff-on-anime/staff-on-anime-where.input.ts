import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { AnimeRelationFilter } from '../anime/anime-relation-filter.input';
import { StaffRelationFilter } from '../staff/staff-relation-filter.input';

@InputType()
export class StaffOnAnimeWhereInput {

    @Field(() => [StaffOnAnimeWhereInput], {nullable:true})
    AND?: Array<StaffOnAnimeWhereInput>;

    @Field(() => [StaffOnAnimeWhereInput], {nullable:true})
    OR?: Array<StaffOnAnimeWhereInput>;

    @Field(() => [StaffOnAnimeWhereInput], {nullable:true})
    NOT?: Array<StaffOnAnimeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    relationId?: StringFilter;

    @Field(() => AnimeRelationFilter, {nullable:true})
    anime?: AnimeRelationFilter;

    @Field(() => StaffRelationFilter, {nullable:true})
    staff?: StaffRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @HideField()
    animeId?: StringFilter;

    @HideField()
    staffId?: StringFilter;
}
