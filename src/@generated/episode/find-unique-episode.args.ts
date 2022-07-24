import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEpisodeArgs {

    @Field(() => EpisodeWhereUniqueInput, {nullable:false})
    @Type(() => EpisodeWhereUniqueInput)
    where!: EpisodeWhereUniqueInput;
}
