import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharactersOnAnimesCountAggregate } from './characters-on-animes-count-aggregate.output';
import { CharactersOnAnimesMinAggregate } from './characters-on-animes-min-aggregate.output';
import { CharactersOnAnimesMaxAggregate } from './characters-on-animes-max-aggregate.output';

@ObjectType()
export class AggregateCharactersOnAnimes {

    @Field(() => CharactersOnAnimesCountAggregate, {nullable:true})
    _count?: CharactersOnAnimesCountAggregate;

    @Field(() => CharactersOnAnimesMinAggregate, {nullable:true})
    _min?: CharactersOnAnimesMinAggregate;

    @Field(() => CharactersOnAnimesMaxAggregate, {nullable:true})
    _max?: CharactersOnAnimesMaxAggregate;
}
