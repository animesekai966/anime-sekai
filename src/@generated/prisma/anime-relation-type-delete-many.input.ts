import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelationTypeWhereInput } from '../anime-relation-type/anime-relation-type-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeRelationTypeDeleteManyInput {

    @Field(() => AnimeRelationTypeWhereInput, {nullable:false})
    @Type(() => AnimeRelationTypeWhereInput)
    where!: AnimeRelationTypeWhereInput;
}
