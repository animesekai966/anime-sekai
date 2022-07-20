import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterRole } from '../prisma/character-role.enum';
import { CharactersOnAnimesCountAggregate } from './characters-on-animes-count-aggregate.output';
import { CharactersOnAnimesMinAggregate } from './characters-on-animes-min-aggregate.output';
import { CharactersOnAnimesMaxAggregate } from './characters-on-animes-max-aggregate.output';

@ObjectType()
export class CharactersOnAnimesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;

    @Field(() => String, {nullable:false})
    characterId!: string;

    @Field(() => String, {nullable:false})
    staffId!: string;

    @Field(() => String, {nullable:false})
    animeId!: string;

    @Field(() => CharactersOnAnimesCountAggregate, {nullable:true})
    _count?: CharactersOnAnimesCountAggregate;

    @Field(() => CharactersOnAnimesMinAggregate, {nullable:true})
    _min?: CharactersOnAnimesMinAggregate;

    @Field(() => CharactersOnAnimesMaxAggregate, {nullable:true})
    _max?: CharactersOnAnimesMaxAggregate;
}
