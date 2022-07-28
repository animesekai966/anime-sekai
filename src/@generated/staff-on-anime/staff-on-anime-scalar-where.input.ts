import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCharacterRoleFilter } from '../prisma/enum-character-role-filter.input';

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

    @Field(() => EnumCharacterRoleFilter, {nullable:true})
    role?: EnumCharacterRoleFilter;

    @Field(() => StringFilter, {nullable:true})
    animeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    staffId?: StringFilter;
}
