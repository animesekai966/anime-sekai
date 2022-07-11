import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumRelationTypeFilter } from '../prisma/enum-relation-type-filter.input';
import { EnumRelationEntityTypeFilter } from '../prisma/enum-relation-entity-type-filter.input';

@InputType()
export class RelatedAnimeWhereInput {

    @Field(() => [RelatedAnimeWhereInput], {nullable:true})
    AND?: Array<RelatedAnimeWhereInput>;

    @Field(() => [RelatedAnimeWhereInput], {nullable:true})
    OR?: Array<RelatedAnimeWhereInput>;

    @Field(() => [RelatedAnimeWhereInput], {nullable:true})
    NOT?: Array<RelatedAnimeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => EnumRelationTypeFilter, {nullable:true})
    relation?: EnumRelationTypeFilter;

    @Field(() => EnumRelationEntityTypeFilter, {nullable:true})
    type?: EnumRelationEntityTypeFilter;
}
