import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedAnimeCreateInput } from '../related-anime/related-anime-create.input';
import { Type } from 'class-transformer';
import { RelatedAnimeUpdateManyInput } from '../related-anime/related-anime-update-many.input';
import { RelatedAnimeDeleteManyInput } from './related-anime-delete-many.input';

@InputType()
export class RelatedAnimeListUpdateEnvelopeInput {

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    @Type(() => RelatedAnimeCreateInput)
    set?: Array<RelatedAnimeCreateInput>;

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    push?: Array<RelatedAnimeCreateInput>;

    @Field(() => RelatedAnimeUpdateManyInput, {nullable:true})
    @Type(() => RelatedAnimeUpdateManyInput)
    updateMany?: RelatedAnimeUpdateManyInput;

    @Field(() => RelatedAnimeDeleteManyInput, {nullable:true})
    @Type(() => RelatedAnimeDeleteManyInput)
    deleteMany?: RelatedAnimeDeleteManyInput;
}
