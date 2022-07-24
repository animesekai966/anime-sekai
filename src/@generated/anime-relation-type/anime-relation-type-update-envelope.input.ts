import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelationTypeCreateInput } from './anime-relation-type-create.input';
import { Type } from 'class-transformer';
import { AnimeRelationTypeUpdateInput } from './anime-relation-type-update.input';

@InputType()
export class AnimeRelationTypeUpdateEnvelopeInput {

    @Field(() => AnimeRelationTypeCreateInput, {nullable:true})
    @Type(() => AnimeRelationTypeCreateInput)
    set?: AnimeRelationTypeCreateInput;

    @Field(() => AnimeRelationTypeUpdateInput, {nullable:true})
    @Type(() => AnimeRelationTypeUpdateInput)
    update?: AnimeRelationTypeUpdateInput;
}
