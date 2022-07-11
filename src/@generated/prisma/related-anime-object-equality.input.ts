import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RelationType } from './relation-type.enum';
import { RelationEntityType } from './relation-entity-type.enum';

@InputType()
export class RelatedAnimeObjectEqualityInput {

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => RelationType, {nullable:false})
    relation!: keyof typeof RelationType;

    @Field(() => RelationEntityType, {nullable:false})
    type!: keyof typeof RelationEntityType;
}
