import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoverWhereInput } from '../cover/cover-where.input';
import { Type } from 'class-transformer';

@InputType()
export class CoverDeleteManyInput {

    @Field(() => CoverWhereInput, {nullable:false})
    @Type(() => CoverWhereInput)
    where!: CoverWhereInput;
}
