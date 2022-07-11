import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RelationType } from '../prisma/relation-type.enum';
import { RelationEntityType } from '../prisma/relation-entity-type.enum';

@InputType()
export class RelatedAnimeCreateInput {

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => RelationType, {nullable:true})
    relation?: keyof typeof RelationType;

    @Field(() => RelationEntityType, {nullable:true})
    type?: keyof typeof RelationEntityType;
}
