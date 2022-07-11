import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeWhereInput } from './anime-theme-where.input';
import { Type } from 'class-transformer';
import { AnimeThemeOrderByWithAggregationInput } from './anime-theme-order-by-with-aggregation.input';
import { AnimeThemeScalarFieldEnum } from './anime-theme-scalar-field.enum';
import { AnimeThemeScalarWhereWithAggregatesInput } from './anime-theme-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AnimeThemeCountAggregateInput } from './anime-theme-count-aggregate.input';
import { AnimeThemeAvgAggregateInput } from './anime-theme-avg-aggregate.input';
import { AnimeThemeSumAggregateInput } from './anime-theme-sum-aggregate.input';
import { AnimeThemeMinAggregateInput } from './anime-theme-min-aggregate.input';
import { AnimeThemeMaxAggregateInput } from './anime-theme-max-aggregate.input';

@ArgsType()
export class AnimeThemeGroupByArgs {

    @Field(() => AnimeThemeWhereInput, {nullable:true})
    @Type(() => AnimeThemeWhereInput)
    where?: AnimeThemeWhereInput;

    @Field(() => [AnimeThemeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AnimeThemeOrderByWithAggregationInput>;

    @Field(() => [AnimeThemeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AnimeThemeScalarFieldEnum>;

    @Field(() => AnimeThemeScalarWhereWithAggregatesInput, {nullable:true})
    having?: AnimeThemeScalarWhereWithAggregatesInput;

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
