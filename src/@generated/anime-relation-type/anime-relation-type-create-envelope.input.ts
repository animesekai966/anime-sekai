import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelationTypeCreateInput } from './anime-relation-type-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeRelationTypeCreateEnvelopeInput {

    @Field(() => AnimeRelationTypeCreateInput, {nullable:true})
    @Type(() => AnimeRelationTypeCreateInput)
    set?: AnimeRelationTypeCreateInput;
}
