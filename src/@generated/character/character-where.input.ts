import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { CharacterNameCompositeFilter } from '../prisma/character-name-composite-filter.input';
import { CharacterImageCompositeFilter } from '../prisma/character-image-composite-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FuzzyDateCompositeFilter } from '../prisma/fuzzy-date-composite-filter.input';
import { CharactersOnAnimesListRelationFilter } from '../characters-on-animes/characters-on-animes-list-relation-filter.input';

@InputType()
export class CharacterWhereInput {

    @Field(() => [CharacterWhereInput], {nullable:true})
    AND?: Array<CharacterWhereInput>;

    @Field(() => [CharacterWhereInput], {nullable:true})
    OR?: Array<CharacterWhereInput>;

    @Field(() => [CharacterWhereInput], {nullable:true})
    NOT?: Array<CharacterWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    malId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    anilistId?: IntNullableFilter;

    @Field(() => CharacterNameCompositeFilter, {nullable:true})
    name?: CharacterNameCompositeFilter;

    @Field(() => CharacterImageCompositeFilter, {nullable:true})
    image?: CharacterImageCompositeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    age?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gender?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bloodType?: StringNullableFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    dateOfBirth?: FuzzyDateCompositeFilter;

    @Field(() => CharactersOnAnimesListRelationFilter, {nullable:true})
    animes?: CharactersOnAnimesListRelationFilter;
}
