import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelationTypeCreateInput } from '../anime-relation-type/anime-relation-type-create.input';
import { Type } from 'class-transformer';
import { AnimeRelationTypeUpdateManyInput } from '../anime-relation-type/anime-relation-type-update-many.input';
import { AnimeRelationTypeDeleteManyInput } from './anime-relation-type-delete-many.input';

@InputType()
export class AnimeRelationTypeListUpdateEnvelopeInput {

    @Field(() => [AnimeRelationTypeCreateInput], {nullable:true})
    @Type(() => AnimeRelationTypeCreateInput)
    set?: Array<AnimeRelationTypeCreateInput>;

    @Field(() => [AnimeRelationTypeCreateInput], {nullable:true})
    push?: Array<AnimeRelationTypeCreateInput>;

    @Field(() => AnimeRelationTypeUpdateManyInput, {nullable:true})
    @Type(() => AnimeRelationTypeUpdateManyInput)
    updateMany?: AnimeRelationTypeUpdateManyInput;

    @Field(() => AnimeRelationTypeDeleteManyInput, {nullable:true})
    @Type(() => AnimeRelationTypeDeleteManyInput)
    deleteMany?: AnimeRelationTypeDeleteManyInput;
}
