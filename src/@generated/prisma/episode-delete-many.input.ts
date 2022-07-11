import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeWhereInput } from '../episode/episode-where.input';
import { Type } from 'class-transformer';

@InputType()
export class EpisodeDeleteManyInput {

    @Field(() => EpisodeWhereInput, {nullable:false})
    @Type(() => EpisodeWhereInput)
    where!: EpisodeWhereInput;
}
