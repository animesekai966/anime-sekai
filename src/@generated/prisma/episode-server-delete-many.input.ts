import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeServerWhereInput } from '../episode-server/episode-server-where.input';
import { Type } from 'class-transformer';

@InputType()
export class EpisodeServerDeleteManyInput {

    @Field(() => EpisodeServerWhereInput, {nullable:false})
    @Type(() => EpisodeServerWhereInput)
    where!: EpisodeServerWhereInput;
}
