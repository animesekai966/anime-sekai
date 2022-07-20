import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterNameOrderByInput } from '../character-name/character-name-order-by.input';
import { CharacterImageOrderByInput } from '../character-image/character-image-order-by.input';
import { FuzzyDateOrderByInput } from '../fuzzy-date/fuzzy-date-order-by.input';
import { CharactersOnAnimesOrderByRelationAggregateInput } from '../characters-on-animes/characters-on-animes-order-by-relation-aggregate.input';

@InputType()
export class CharacterOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    anilistId?: keyof typeof SortOrder;

    @Field(() => CharacterNameOrderByInput, {nullable:true})
    name?: CharacterNameOrderByInput;

    @Field(() => CharacterImageOrderByInput, {nullable:true})
    image?: CharacterImageOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bloodType?: keyof typeof SortOrder;

    @Field(() => FuzzyDateOrderByInput, {nullable:true})
    dateOfBirth?: FuzzyDateOrderByInput;

    @Field(() => CharactersOnAnimesOrderByRelationAggregateInput, {nullable:true})
    animes?: CharactersOnAnimesOrderByRelationAggregateInput;
}
