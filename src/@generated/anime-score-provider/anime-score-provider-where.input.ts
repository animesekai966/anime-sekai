import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AnimeScoreProviderWhereInput {

    @Field(() => [AnimeScoreProviderWhereInput], {nullable:true})
    AND?: Array<AnimeScoreProviderWhereInput>;

    @Field(() => [AnimeScoreProviderWhereInput], {nullable:true})
    OR?: Array<AnimeScoreProviderWhereInput>;

    @Field(() => [AnimeScoreProviderWhereInput], {nullable:true})
    NOT?: Array<AnimeScoreProviderWhereInput>;

    @Field(() => FloatNullableFilter, {nullable:true})
    score?: FloatNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    scoredBy?: IntNullableFilter;
}
