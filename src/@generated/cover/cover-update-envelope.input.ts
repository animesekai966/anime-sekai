import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoverCreateInput } from './cover-create.input';
import { Type } from 'class-transformer';
import { CoverUpdateInput } from './cover-update.input';

@InputType()
export class CoverUpdateEnvelopeInput {

    @Field(() => CoverCreateInput, {nullable:true})
    @Type(() => CoverCreateInput)
    set?: CoverCreateInput;

    @Field(() => CoverUpdateInput, {nullable:true})
    @Type(() => CoverUpdateInput)
    update?: CoverUpdateInput;
}
