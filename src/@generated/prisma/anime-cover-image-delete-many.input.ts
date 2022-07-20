import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverImageWhereInput } from '../anime-cover-image/anime-cover-image-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeCoverImageDeleteManyInput {

    @Field(() => AnimeCoverImageWhereInput, {nullable:false})
    @Type(() => AnimeCoverImageWhereInput)
    where!: AnimeCoverImageWhereInput;
}
