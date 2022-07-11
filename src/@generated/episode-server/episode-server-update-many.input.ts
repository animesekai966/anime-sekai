import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeServerWhereInput } from './episode-server-where.input';
import { Type } from 'class-transformer';
import { EpisodeServerUpdateInput } from './episode-server-update.input';

@InputType()
export class EpisodeServerUpdateManyInput {

    @Field(() => EpisodeServerWhereInput, {nullable:false})
    @Type(() => EpisodeServerWhereInput)
    where!: EpisodeServerWhereInput;

    @Field(() => EpisodeServerUpdateInput, {nullable:false})
    @Type(() => EpisodeServerUpdateInput)
    data!: EpisodeServerUpdateInput;
}
