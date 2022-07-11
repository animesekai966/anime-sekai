import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeCreateInput } from '../episode/episode-create.input';
import { Type } from 'class-transformer';
import { EpisodeUpdateManyInput } from '../episode/episode-update-many.input';
import { EpisodeDeleteManyInput } from './episode-delete-many.input';

@InputType()
export class EpisodeListUpdateEnvelopeInput {

    @Field(() => [EpisodeCreateInput], {nullable:true})
    @Type(() => EpisodeCreateInput)
    set?: Array<EpisodeCreateInput>;

    @Field(() => [EpisodeCreateInput], {nullable:true})
    push?: Array<EpisodeCreateInput>;

    @Field(() => EpisodeUpdateManyInput, {nullable:true})
    @Type(() => EpisodeUpdateManyInput)
    updateMany?: EpisodeUpdateManyInput;

    @Field(() => EpisodeDeleteManyInput, {nullable:true})
    @Type(() => EpisodeDeleteManyInput)
    deleteMany?: EpisodeDeleteManyInput;
}
