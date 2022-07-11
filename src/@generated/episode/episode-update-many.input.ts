import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeWhereInput } from './episode-where.input';
import { Type } from 'class-transformer';
import { EpisodeUpdateInput } from './episode-update.input';

@InputType()
export class EpisodeUpdateManyInput {

    @Field(() => EpisodeWhereInput, {nullable:false})
    @Type(() => EpisodeWhereInput)
    where!: EpisodeWhereInput;

    @Field(() => EpisodeUpdateInput, {nullable:false})
    @Type(() => EpisodeUpdateInput)
    data!: EpisodeUpdateInput;
}
