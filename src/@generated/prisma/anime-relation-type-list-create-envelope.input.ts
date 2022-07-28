import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelationTypeCreateInput } from '../anime-relation-type/anime-relation-type-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeRelationTypeListCreateEnvelopeInput {

    @Field(() => [AnimeRelationTypeCreateInput], {nullable:true})
    @Type(() => AnimeRelationTypeCreateInput)
    set?: Array<AnimeRelationTypeCreateInput>;
}
