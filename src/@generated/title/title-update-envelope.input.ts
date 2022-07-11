import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TitleCreateInput } from './title-create.input';
import { Type } from 'class-transformer';
import { TitleUpdateInput } from './title-update.input';

@InputType()
export class TitleUpdateEnvelopeInput {

    @Field(() => TitleCreateInput, {nullable:true})
    @Type(() => TitleCreateInput)
    set?: TitleCreateInput;

    @Field(() => TitleUpdateInput, {nullable:true})
    @Type(() => TitleUpdateInput)
    update?: TitleUpdateInput;
}
