import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeCreateInput } from './episode-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEpisodeArgs {

    @Field(() => EpisodeCreateInput, {nullable:false})
    @Type(() => EpisodeCreateInput)
    data!: EpisodeCreateInput;
}
