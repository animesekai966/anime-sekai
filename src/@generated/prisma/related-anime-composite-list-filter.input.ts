import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedAnimeObjectEqualityInput } from './related-anime-object-equality.input';
import { RelatedAnimeWhereInput } from '../related-anime/related-anime-where.input';

@InputType()
export class RelatedAnimeCompositeListFilter {

    @Field(() => [RelatedAnimeObjectEqualityInput], {nullable:true})
    equals?: Array<RelatedAnimeObjectEqualityInput>;

    @Field(() => RelatedAnimeWhereInput, {nullable:true})
    every?: RelatedAnimeWhereInput;

    @Field(() => RelatedAnimeWhereInput, {nullable:true})
    some?: RelatedAnimeWhereInput;

    @Field(() => RelatedAnimeWhereInput, {nullable:true})
    none?: RelatedAnimeWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
