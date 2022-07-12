import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class AnimeStudioScalarWhereInput {

    @Field(() => [AnimeStudioScalarWhereInput], {nullable:true})
    AND?: Array<AnimeStudioScalarWhereInput>;

    @Field(() => [AnimeStudioScalarWhereInput], {nullable:true})
    OR?: Array<AnimeStudioScalarWhereInput>;

    @Field(() => [AnimeStudioScalarWhereInput], {nullable:true})
    NOT?: Array<AnimeStudioScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    animeIDs?: StringNullableListFilter;
}
