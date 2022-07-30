import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { AnimeRelationFilter } from '../anime/anime-relation-filter.input';
import { StaffListRelationFilter } from '../staff/staff-list-relation-filter.input';
import { CharacterRelationFilter } from '../character/character-relation-filter.input';
import { EnumCharacterRoleFilter } from '../prisma/enum-character-role-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class CharacterOnAnimeWhereInput {

    @Field(() => [CharacterOnAnimeWhereInput], {nullable:true})
    AND?: Array<CharacterOnAnimeWhereInput>;

    @Field(() => [CharacterOnAnimeWhereInput], {nullable:true})
    OR?: Array<CharacterOnAnimeWhereInput>;

    @Field(() => [CharacterOnAnimeWhereInput], {nullable:true})
    NOT?: Array<CharacterOnAnimeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    relationId?: StringFilter;

    @Field(() => AnimeRelationFilter, {nullable:true})
    anime?: AnimeRelationFilter;

    @Field(() => StaffListRelationFilter, {nullable:true})
    voiceActors?: StaffListRelationFilter;

    @Field(() => CharacterRelationFilter, {nullable:true})
    character?: CharacterRelationFilter;

    @Field(() => EnumCharacterRoleFilter, {nullable:true})
    role?: EnumCharacterRoleFilter;

    @Field(() => StringFilter, {nullable:true})
    animeId?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    staffId?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    characterId?: StringFilter;
}
