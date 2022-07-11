import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedAnimeWhereInput } from './related-anime-where.input';
import { Type } from 'class-transformer';
import { RelatedAnimeUpdateInput } from './related-anime-update.input';

@InputType()
export class RelatedAnimeUpdateManyInput {

    @Field(() => RelatedAnimeWhereInput, {nullable:false})
    @Type(() => RelatedAnimeWhereInput)
    where!: RelatedAnimeWhereInput;

    @Field(() => RelatedAnimeUpdateInput, {nullable:false})
    @Type(() => RelatedAnimeUpdateInput)
    data!: RelatedAnimeUpdateInput;
}
