import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';
import { Type } from 'class-transformer';
import { EpisodeCreateInput } from './episode-create.input';
import { EpisodeUpdateInput } from './episode-update.input';

@ArgsType()
export class UpsertOneEpisodeArgs {

    @Field(() => EpisodeWhereUniqueInput, {nullable:false})
    @Type(() => EpisodeWhereUniqueInput)
    where!: EpisodeWhereUniqueInput;

    @Field(() => EpisodeCreateInput, {nullable:false})
    @Type(() => EpisodeCreateInput)
    create!: EpisodeCreateInput;

    @Field(() => EpisodeUpdateInput, {nullable:false})
    @Type(() => EpisodeUpdateInput)
    update!: EpisodeUpdateInput;
}
