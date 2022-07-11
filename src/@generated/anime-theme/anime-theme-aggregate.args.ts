import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeWhereInput } from './anime-theme-where.input';
import { Type } from 'class-transformer';
import { AnimeThemeOrderByWithRelationInput } from './anime-theme-order-by-with-relation.input';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeThemeCountAggregateInput } from './anime-theme-count-aggregate.input';
import { AnimeThemeAvgAggregateInput } from './anime-theme-avg-aggregate.input';
import { AnimeThemeSumAggregateInput } from './anime-theme-sum-aggregate.input';
import { AnimeThemeMinAggregateInput } from './anime-theme-min-aggregate.input';
import { AnimeThemeMaxAggregateInput } from './anime-theme-max-aggregate.input';

@ArgsType()
export class AnimeThemeAggregateArgs {

    @Field(() => AnimeThemeWhereInput, {nullable:true})
    @Type(() => AnimeThemeWhereInput)
    where?: AnimeThemeWhereInput;

    @Field(() => [AnimeThemeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeThemeOrderByWithRelationInput>;

    @Field(() => AnimeThemeWhereUniqueInput, {nullable:true})
    cursor?: AnimeThemeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnimeThemeCountAggregateInput, {nullable:true})
    _count?: AnimeThemeCountAggregateInput;

    @Field(() => AnimeThemeAvgAggregateInput, {nullable:true})
    _avg?: AnimeThemeAvgAggregateInput;

    @Field(() => AnimeThemeSumAggregateInput, {nullable:true})
    _sum?: AnimeThemeSumAggregateInput;

    @Field(() => AnimeThemeMinAggregateInput, {nullable:true})
    _min?: AnimeThemeMinAggregateInput;

    @Field(() => AnimeThemeMaxAggregateInput, {nullable:true})
    _max?: AnimeThemeMaxAggregateInput;
}
