import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeScalarWhereInput } from './episode-scalar-where.input';
import { Type } from 'class-transformer';
import { EpisodeUpdateManyMutationInput } from './episode-update-many-mutation.input';

@InputType()
export class EpisodeUpdateManyWithWhereWithoutAnimeInput {

    @Field(() => EpisodeScalarWhereInput, {nullable:false})
    @Type(() => EpisodeScalarWhereInput)
    where!: EpisodeScalarWhereInput;

    @Field(() => EpisodeUpdateManyMutationInput, {nullable:false})
    @Type(() => EpisodeUpdateManyMutationInput)
    data!: EpisodeUpdateManyMutationInput;
}
