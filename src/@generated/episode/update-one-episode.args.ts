import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeUpdateInput } from './episode-update.input';
import { Type } from 'class-transformer';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';

@ArgsType()
export class UpdateOneEpisodeArgs {

    @Field(() => EpisodeUpdateInput, {nullable:false})
    @Type(() => EpisodeUpdateInput)
    data!: EpisodeUpdateInput;

    @Field(() => EpisodeWhereUniqueInput, {nullable:false})
    @Type(() => EpisodeWhereUniqueInput)
    where!: EpisodeWhereUniqueInput;
}
