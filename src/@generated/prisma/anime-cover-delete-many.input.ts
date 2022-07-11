import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverWhereInput } from '../anime-cover/anime-cover-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeCoverDeleteManyInput {

    @Field(() => AnimeCoverWhereInput, {nullable:false})
    @Type(() => AnimeCoverWhereInput)
    where!: AnimeCoverWhereInput;
}
