import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EpisodeObjectEqualityInput } from './episode-object-equality.input';
import { EpisodeWhereInput } from '../episode/episode-where.input';

@InputType()
export class EpisodeCompositeListFilter {

    @Field(() => [EpisodeObjectEqualityInput], {nullable:true})
    equals?: Array<EpisodeObjectEqualityInput>;

    @Field(() => EpisodeWhereInput, {nullable:true})
    every?: EpisodeWhereInput;

    @Field(() => EpisodeWhereInput, {nullable:true})
    some?: EpisodeWhereInput;

    @Field(() => EpisodeWhereInput, {nullable:true})
    none?: EpisodeWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
