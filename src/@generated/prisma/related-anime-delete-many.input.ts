import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelatedAnimeWhereInput } from '../related-anime/related-anime-where.input';
import { Type } from 'class-transformer';

@InputType()
export class RelatedAnimeDeleteManyInput {

    @Field(() => RelatedAnimeWhereInput, {nullable:false})
    @Type(() => RelatedAnimeWhereInput)
    where!: RelatedAnimeWhereInput;
}
