import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { AnimeRelationFilter } from '../anime/anime-relation-filter.input';
import { StaffRelationFilter } from '../staff/staff-relation-filter.input';
import { EnumCharacterRoleFilter } from '../prisma/enum-character-role-filter.input';

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

    @Field(() => AnimeRelationFilter, {nullable:true})
    anime?: AnimeRelationFilter;

    @Field(() => StaffRelationFilter, {nullable:true})
    voiceActor?: StaffRelationFilter;

    @Field(() => EnumCharacterRoleFilter, {nullable:true})
    role?: EnumCharacterRoleFilter;

    @Field(() => StringFilter, {nullable:true})
    animeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    staffId?: StringFilter;
}
