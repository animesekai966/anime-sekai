import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TitleOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    english?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    romaji?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    synonyms?: keyof typeof SortOrder;
}
