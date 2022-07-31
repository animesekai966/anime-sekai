import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';
import { CharacterOnAnimeCountAggregate } from './character-on-anime-count-aggregate.output';
import { CharacterOnAnimeMinAggregate } from './character-on-anime-min-aggregate.output';
import { CharacterOnAnimeMaxAggregate } from './character-on-anime-max-aggregate.output';

@ObjectType()
export class CharacterOnAnimeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @HideField()
    relationId!: string;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @HideField()
    animeId!: string;

    @HideField()
    staffId?: Array<string>;

    @HideField()
    characterId!: string;

    @Field(() => CharacterOnAnimeCountAggregate, {nullable:true})
    _count?: CharacterOnAnimeCountAggregate;

    @Field(() => CharacterOnAnimeMinAggregate, {nullable:true})
    _min?: CharacterOnAnimeMinAggregate;

    @Field(() => CharacterOnAnimeMaxAggregate, {nullable:true})
    _max?: CharacterOnAnimeMaxAggregate;
}
