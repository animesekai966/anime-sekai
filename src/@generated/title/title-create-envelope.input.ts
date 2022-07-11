import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TitleCreateInput } from './title-create.input';
import { Type } from 'class-transformer';

@InputType()
export class TitleCreateEnvelopeInput {

    @Field(() => TitleCreateInput, {nullable:true})
    @Type(() => TitleCreateInput)
    set?: TitleCreateInput;
}
