import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StudioScalarWhereInput {

    @Field(() => [StudioScalarWhereInput], {nullable:true})
    AND?: Array<StudioScalarWhereInput>;

    @Field(() => [StudioScalarWhereInput], {nullable:true})
    OR?: Array<StudioScalarWhereInput>;

    @Field(() => [StudioScalarWhereInput], {nullable:true})
    NOT?: Array<StudioScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @HideField()
    animatedAnimeIDs?: StringNullableListFilter;

    @HideField()
    producedAnimeIDs?: StringNullableListFilter;
}
