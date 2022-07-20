import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StaffImageOrderByInput } from '../staff-image/staff-image-order-by.input';
import { StaffNameOrderByInput } from '../staff-name/staff-name-order-by.input';
import { FuzzyDateOrderByInput } from '../fuzzy-date/fuzzy-date-order-by.input';
import { CharactersOnAnimesOrderByRelationAggregateInput } from '../characters-on-animes/characters-on-animes-order-by-relation-aggregate.input';

@InputType()
export class StaffOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    anilistId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;

    @Field(() => StaffImageOrderByInput, {nullable:true})
    image?: StaffImageOrderByInput;

    @Field(() => StaffNameOrderByInput, {nullable:true})
    name?: StaffNameOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    yearsActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    homeTown?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bloodType?: keyof typeof SortOrder;

    @Field(() => FuzzyDateOrderByInput, {nullable:true})
    dateOfBirth?: FuzzyDateOrderByInput;

    @Field(() => FuzzyDateOrderByInput, {nullable:true})
    dateOfDeath?: FuzzyDateOrderByInput;

    @Field(() => CharactersOnAnimesOrderByRelationAggregateInput, {nullable:true})
    animes?: CharactersOnAnimesOrderByRelationAggregateInput;
}
