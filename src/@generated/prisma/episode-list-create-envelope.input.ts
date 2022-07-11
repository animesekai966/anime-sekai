import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeCreateInput } from '../episode/episode-create.input';
import { Type } from 'class-transformer';

@InputType()
export class EpisodeListCreateEnvelopeInput {

    @Field(() => [EpisodeCreateInput], {nullable:true})
    @Type(() => EpisodeCreateInput)
    set?: Array<EpisodeCreateInput>;
}
