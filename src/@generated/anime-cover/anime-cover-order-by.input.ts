import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AnimeCoverOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    large?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    medium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    small?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
}
