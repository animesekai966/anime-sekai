import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RelationType } from '../prisma/relation-type.enum';
import { RelationEntityType } from '../prisma/relation-entity-type.enum';

@ObjectType()
export class RelatedAnime {

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => RelationType, {nullable:false,defaultValue:'OTHER'})
    relation!: keyof typeof RelationType;

    @Field(() => RelationEntityType, {nullable:false,defaultValue:'ANIME'})
    type!: keyof typeof RelationEntityType;
}
