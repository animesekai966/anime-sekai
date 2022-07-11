import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedAnimeCreateInput } from '../related-anime/related-anime-create.input';
import { Type } from 'class-transformer';

@InputType()
export class RelatedAnimeListCreateEnvelopeInput {

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    @Type(() => RelatedAnimeCreateInput)
    set?: Array<RelatedAnimeCreateInput>;
}
