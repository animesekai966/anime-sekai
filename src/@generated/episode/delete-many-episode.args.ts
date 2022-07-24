import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeWhereInput } from './episode-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyEpisodeArgs {

    @Field(() => EpisodeWhereInput, {nullable:true})
    @Type(() => EpisodeWhereInput)
    where?: EpisodeWhereInput;
}
