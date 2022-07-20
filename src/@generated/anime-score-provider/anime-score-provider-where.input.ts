import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class AnimeScoreProviderWhereInput {

    @Field(() => [AnimeScoreProviderWhereInput], {nullable:true})
    AND?: Array<AnimeScoreProviderWhereInput>;

    @Field(() => [AnimeScoreProviderWhereInput], {nullable:true})
    OR?: Array<AnimeScoreProviderWhereInput>;

    @Field(() => [AnimeScoreProviderWhereInput], {nullable:true})
    NOT?: Array<AnimeScoreProviderWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    score?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    scoredBy?: IntFilter;
}
