import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelationTypeWhereInput } from './anime-relation-type-where.input';
import { Type } from 'class-transformer';
import { AnimeRelationTypeUpdateInput } from './anime-relation-type-update.input';

@InputType()
export class AnimeRelationTypeUpdateManyInput {

    @Field(() => AnimeRelationTypeWhereInput, {nullable:false})
    @Type(() => AnimeRelationTypeWhereInput)
    where!: AnimeRelationTypeWhereInput;

    @Field(() => AnimeRelationTypeUpdateInput, {nullable:false})
    @Type(() => AnimeRelationTypeUpdateInput)
    data!: AnimeRelationTypeUpdateInput;
}
