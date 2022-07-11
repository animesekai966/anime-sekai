import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoverCreateInput } from './cover-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CoverCreateEnvelopeInput {

    @Field(() => CoverCreateInput, {nullable:true})
    @Type(() => CoverCreateInput)
    set?: CoverCreateInput;
}
