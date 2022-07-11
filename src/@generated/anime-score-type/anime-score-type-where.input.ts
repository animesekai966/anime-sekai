import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class AnimeScoreTypeWhereInput {

    @Field(() => [AnimeScoreTypeWhereInput], {nullable:true})
    AND?: Array<AnimeScoreTypeWhereInput>;

    @Field(() => [AnimeScoreTypeWhereInput], {nullable:true})
    OR?: Array<AnimeScoreTypeWhereInput>;

    @Field(() => [AnimeScoreTypeWhereInput], {nullable:true})
    NOT?: Array<AnimeScoreTypeWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    score?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    scoredBy?: IntFilter;
}
