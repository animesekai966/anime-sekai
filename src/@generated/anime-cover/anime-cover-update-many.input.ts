import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverWhereInput } from './anime-cover-where.input';
import { Type } from 'class-transformer';
import { AnimeCoverUpdateInput } from './anime-cover-update.input';

@InputType()
export class AnimeCoverUpdateManyInput {

    @Field(() => AnimeCoverWhereInput, {nullable:false})
    @Type(() => AnimeCoverWhereInput)
    where!: AnimeCoverWhereInput;

    @Field(() => AnimeCoverUpdateInput, {nullable:false})
    @Type(() => AnimeCoverUpdateInput)
    data!: AnimeCoverUpdateInput;
}
