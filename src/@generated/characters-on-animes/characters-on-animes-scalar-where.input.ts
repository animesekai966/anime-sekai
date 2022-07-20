import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCharacterRoleFilter } from '../prisma/enum-character-role-filter.input';

@InputType()
export class CharactersOnAnimesScalarWhereInput {

    @Field(() => [CharactersOnAnimesScalarWhereInput], {nullable:true})
    AND?: Array<CharactersOnAnimesScalarWhereInput>;

    @Field(() => [CharactersOnAnimesScalarWhereInput], {nullable:true})
    OR?: Array<CharactersOnAnimesScalarWhereInput>;

    @Field(() => [CharactersOnAnimesScalarWhereInput], {nullable:true})
    NOT?: Array<CharactersOnAnimesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumCharacterRoleFilter, {nullable:true})
    role?: EnumCharacterRoleFilter;

    @Field(() => StringFilter, {nullable:true})
    characterId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    staffId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    animeId?: StringFilter;
}
