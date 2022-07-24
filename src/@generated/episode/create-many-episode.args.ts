import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeCreateManyInput } from './episode-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyEpisodeArgs {

    @Field(() => [EpisodeCreateManyInput], {nullable:false})
    @Type(() => EpisodeCreateManyInput)
    data!: Array<EpisodeCreateManyInput>;
}
