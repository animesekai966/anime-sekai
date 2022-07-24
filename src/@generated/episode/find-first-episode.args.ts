import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeWhereInput } from './episode-where.input';
import { Type } from 'class-transformer';
import { EpisodeOrderByWithRelationInput } from './episode-order-by-with-relation.input';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EpisodeScalarFieldEnum } from './episode-scalar-field.enum';

@ArgsType()
export class FindFirstEpisodeArgs {

    @Field(() => EpisodeWhereInput, {nullable:true})
    @Type(() => EpisodeWhereInput)
    where?: EpisodeWhereInput;

    @Field(() => [EpisodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EpisodeOrderByWithRelationInput>;

    @Field(() => EpisodeWhereUniqueInput, {nullable:true})
    cursor?: EpisodeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EpisodeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EpisodeScalarFieldEnum>;
}
