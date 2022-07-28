import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StaffNameCompositeFilter } from '../prisma/staff-name-composite-filter.input';
import { ImageCompositeFilter } from '../prisma/image-composite-filter.input';
import { DescriptionCompositeFilter } from '../prisma/description-composite-filter.input';
import { CharacterOnAnimeListRelationFilter } from '../character-on-anime/character-on-anime-list-relation-filter.input';
import { StaffOnAnimeListRelationFilter } from '../staff-on-anime/staff-on-anime-list-relation-filter.input';

@InputType()
export class StaffWhereInput {

    @Field(() => [StaffWhereInput], {nullable:true})
    AND?: Array<StaffWhereInput>;

    @Field(() => [StaffWhereInput], {nullable:true})
    OR?: Array<StaffWhereInput>;

    @Field(() => [StaffWhereInput], {nullable:true})
    NOT?: Array<StaffWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    malId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    anilistId?: IntNullableFilter;

    @Field(() => StaffNameCompositeFilter, {nullable:true})
    name?: StaffNameCompositeFilter;

    @Field(() => ImageCompositeFilter, {nullable:true})
    image?: ImageCompositeFilter;

    @Field(() => StringFilter, {nullable:true})
    info?: StringFilter;

    @Field(() => DescriptionCompositeFilter, {nullable:true})
    description?: DescriptionCompositeFilter;

    @Field(() => CharacterOnAnimeListRelationFilter, {nullable:true})
    characters?: CharacterOnAnimeListRelationFilter;

    @Field(() => StaffOnAnimeListRelationFilter, {nullable:true})
    animeRoles?: StaffOnAnimeListRelationFilter;
}
