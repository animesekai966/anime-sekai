import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoverWhereInput } from './cover-where.input';
import { Type } from 'class-transformer';
import { CoverUpdateInput } from './cover-update.input';

@InputType()
export class CoverUpdateManyInput {

    @Field(() => CoverWhereInput, {nullable:false})
    @Type(() => CoverWhereInput)
    where!: CoverWhereInput;

    @Field(() => CoverUpdateInput, {nullable:false})
    @Type(() => CoverUpdateInput)
    data!: CoverUpdateInput;
}
