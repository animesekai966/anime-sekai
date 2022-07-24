import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeWhereInput } from './episode-where.input';

@InputType()
export class EpisodeListRelationFilter {

    @Field(() => EpisodeWhereInput, {nullable:true})
    every?: EpisodeWhereInput;

    @Field(() => EpisodeWhereInput, {nullable:true})
    some?: EpisodeWhereInput;

    @Field(() => EpisodeWhereInput, {nullable:true})
    none?: EpisodeWhereInput;
}
