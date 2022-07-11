import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoverCreateInput } from '../cover/cover-create.input';
import { Type } from 'class-transformer';

@InputType()
export class CoverListCreateEnvelopeInput {

    @Field(() => [CoverCreateInput], {nullable:true})
    @Type(() => CoverCreateInput)
    set?: Array<CoverCreateInput>;
}
