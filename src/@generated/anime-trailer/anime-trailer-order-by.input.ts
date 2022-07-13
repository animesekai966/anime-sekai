import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AnimeTrailerOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    youtubeId?: keyof typeof SortOrder;
}
