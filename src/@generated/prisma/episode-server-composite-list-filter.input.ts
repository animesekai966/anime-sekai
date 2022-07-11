import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeServerObjectEqualityInput } from './episode-server-object-equality.input';
import { EpisodeServerWhereInput } from '../episode-server/episode-server-where.input';

@InputType()
export class EpisodeServerCompositeListFilter {

    @Field(() => [EpisodeServerObjectEqualityInput], {nullable:true})
    equals?: Array<EpisodeServerObjectEqualityInput>;

    @Field(() => EpisodeServerWhereInput, {nullable:true})
    every?: EpisodeServerWhereInput;

    @Field(() => EpisodeServerWhereInput, {nullable:true})
    some?: EpisodeServerWhereInput;

    @Field(() => EpisodeServerWhereInput, {nullable:true})
    none?: EpisodeServerWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
