import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeRelation } from './anime-relation.enum';

@InputType()
export class EnumAnimeRelationFieldUpdateOperationsInput {

    @Field(() => AnimeRelation, {nullable:true})
    set?: keyof typeof AnimeRelation;
}
