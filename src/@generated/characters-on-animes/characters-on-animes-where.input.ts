import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCharacterRoleFilter } from '../prisma/enum-character-role-filter.input';
import { CharacterRelationFilter } from '../character/character-relation-filter.input';
import { StaffRelationFilter } from '../staff/staff-relation-filter.input';
import { AnimeRelationFilter } from '../anime/anime-relation-filter.input';

@InputType()
export class CharactersOnAnimesWhereInput {

    @Field(() => [CharactersOnAnimesWhereInput], {nullable:true})
    AND?: Array<CharactersOnAnimesWhereInput>;

    @Field(() => [CharactersOnAnimesWhereInput], {nullable:true})
    OR?: Array<CharactersOnAnimesWhereInput>;

    @Field(() => [CharactersOnAnimesWhereInput], {nullable:true})
    NOT?: Array<CharactersOnAnimesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumCharacterRoleFilter, {nullable:true})
    role?: EnumCharacterRoleFilter;

    @Field(() => CharacterRelationFilter, {nullable:true})
    character?: CharacterRelationFilter;

    @Field(() => StaffRelationFilter, {nullable:true})
    staff?: StaffRelationFilter;

    @Field(() => AnimeRelationFilter, {nullable:true})
    anime?: AnimeRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    characterId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    staffId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    animeId?: StringFilter;
}
