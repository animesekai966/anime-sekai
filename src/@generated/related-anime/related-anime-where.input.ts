import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAnimeRelationFilter } from '../prisma/enum-anime-relation-filter.input';
import { EnumRelationTypeFilter } from '../prisma/enum-relation-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class RelatedAnimeWhereInput {

    @Field(() => [RelatedAnimeWhereInput], {nullable:true})
    AND?: Array<RelatedAnimeWhereInput>;

    @Field(() => [RelatedAnimeWhereInput], {nullable:true})
    OR?: Array<RelatedAnimeWhereInput>;

    @Field(() => [RelatedAnimeWhereInput], {nullable:true})
    NOT?: Array<RelatedAnimeWhereInput>;

    @Field(() => EnumAnimeRelationFilter, {nullable:true})
    relation?: EnumAnimeRelationFilter;

    @Field(() => EnumRelationTypeFilter, {nullable:true})
    type?: EnumRelationTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;
}
