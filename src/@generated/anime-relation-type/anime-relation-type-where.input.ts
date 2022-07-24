import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumAnimeRelationFilter } from '../prisma/enum-anime-relation-filter.input';

@InputType()
export class AnimeRelationTypeWhereInput {

    @Field(() => [AnimeRelationTypeWhereInput], {nullable:true})
    AND?: Array<AnimeRelationTypeWhereInput>;

    @Field(() => [AnimeRelationTypeWhereInput], {nullable:true})
    OR?: Array<AnimeRelationTypeWhereInput>;

    @Field(() => [AnimeRelationTypeWhereInput], {nullable:true})
    NOT?: Array<AnimeRelationTypeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    anilistId?: IntNullableFilter;

    @Field(() => EnumAnimeRelationFilter, {nullable:true})
    type?: EnumAnimeRelationFilter;
}
