import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterNameOrderByInput } from '../character-name/character-name-order-by.input';
import { ImageOrderByInput } from '../image/image-order-by.input';
import { DescriptionOrderByInput } from '../description/description-order-by.input';

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

    @Field(() => ImageOrderByInput, {nullable:true})
    image?: ImageOrderByInput;

    @Field(() => DescriptionOrderByInput, {nullable:true})
    description?: DescriptionOrderByInput;
}
