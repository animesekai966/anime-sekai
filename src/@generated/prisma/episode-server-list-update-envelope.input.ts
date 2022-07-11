import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeServerCreateInput } from '../episode-server/episode-server-create.input';
import { Type } from 'class-transformer';
import { EpisodeServerUpdateManyInput } from '../episode-server/episode-server-update-many.input';
import { EpisodeServerDeleteManyInput } from './episode-server-delete-many.input';

@InputType()
export class EpisodeServerListUpdateEnvelopeInput {

    @Field(() => [EpisodeServerCreateInput], {nullable:true})
    @Type(() => EpisodeServerCreateInput)
    set?: Array<EpisodeServerCreateInput>;

    @Field(() => [EpisodeServerCreateInput], {nullable:true})
    push?: Array<EpisodeServerCreateInput>;

    @Field(() => EpisodeServerUpdateManyInput, {nullable:true})
    @Type(() => EpisodeServerUpdateManyInput)
    updateMany?: EpisodeServerUpdateManyInput;

    @Field(() => EpisodeServerDeleteManyInput, {nullable:true})
    @Type(() => EpisodeServerDeleteManyInput)
    deleteMany?: EpisodeServerDeleteManyInput;
}
