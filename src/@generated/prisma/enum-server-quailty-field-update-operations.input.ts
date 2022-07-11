import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerQuailty } from './server-quailty.enum';

@InputType()
export class EnumServerQuailtyFieldUpdateOperationsInput {

    @Field(() => ServerQuailty, {nullable:true})
    set?: keyof typeof ServerQuailty;
}
