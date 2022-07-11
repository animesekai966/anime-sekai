import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreTypeCompositeFilter } from '../prisma/anime-score-type-composite-filter.input';

@InputType()
export class AnimeScoreWhereInput {

    @Field(() => [AnimeScoreWhereInput], {nullable:true})
    AND?: Array<AnimeScoreWhereInput>;

    @Field(() => [AnimeScoreWhereInput], {nullable:true})
    OR?: Array<AnimeScoreWhereInput>;

    @Field(() => [AnimeScoreWhereInput], {nullable:true})
    NOT?: Array<AnimeScoreWhereInput>;

    @Field(() => AnimeScoreTypeCompositeFilter, {nullable:true})
    mal?: AnimeScoreTypeCompositeFilter;

    @Field(() => AnimeScoreTypeCompositeFilter, {nullable:true})
    anilist?: AnimeScoreTypeCompositeFilter;
}
