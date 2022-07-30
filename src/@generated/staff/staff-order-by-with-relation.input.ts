import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StaffNameOrderByInput } from '../staff-name/staff-name-order-by.input';
import { ImageOrderByInput } from '../image/image-order-by.input';
import { DescriptionOrderByInput } from '../description/description-order-by.input';
import { CharacterOnAnimeOrderByRelationAggregateInput } from '../character-on-anime/character-on-anime-order-by-relation-aggregate.input';
import { StaffOnAnimeOrderByRelationAggregateInput } from '../staff-on-anime/staff-on-anime-order-by-relation-aggregate.input';

@InputType()
export class StaffOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => StaffNameOrderByInput, {nullable:true})
    name?: StaffNameOrderByInput;

    @Field(() => ImageOrderByInput, {nullable:true})
    image?: ImageOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    info?: keyof typeof SortOrder;

    @Field(() => DescriptionOrderByInput, {nullable:true})
    description?: DescriptionOrderByInput;

    @Field(() => CharacterOnAnimeOrderByRelationAggregateInput, {nullable:true})
    characters?: CharacterOnAnimeOrderByRelationAggregateInput;

    @Field(() => StaffOnAnimeOrderByRelationAggregateInput, {nullable:true})
    animeRoles?: StaffOnAnimeOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    characterIDs?: keyof typeof SortOrder;
}
