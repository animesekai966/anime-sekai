import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeUpdateManyMutationInput } from './episode-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EpisodeWhereInput } from './episode-where.input';

@ArgsType()
export class UpdateManyEpisodeArgs {

    @Field(() => EpisodeUpdateManyMutationInput, {nullable:false})
    @Type(() => EpisodeUpdateManyMutationInput)
    data!: EpisodeUpdateManyMutationInput;

    @Field(() => EpisodeWhereInput, {nullable:true})
    @Type(() => EpisodeWhereInput)
    where?: EpisodeWhereInput;
}
