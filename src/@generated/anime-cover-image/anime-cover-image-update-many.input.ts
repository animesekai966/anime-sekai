import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverImageWhereInput } from './anime-cover-image-where.input';
import { Type } from 'class-transformer';
import { AnimeCoverImageUpdateInput } from './anime-cover-image-update.input';

@InputType()
export class AnimeCoverImageUpdateManyInput {

    @Field(() => AnimeCoverImageWhereInput, {nullable:false})
    @Type(() => AnimeCoverImageWhereInput)
    where!: AnimeCoverImageWhereInput;

    @Field(() => AnimeCoverImageUpdateInput, {nullable:false})
    @Type(() => AnimeCoverImageUpdateInput)
    data!: AnimeCoverImageUpdateInput;
}
