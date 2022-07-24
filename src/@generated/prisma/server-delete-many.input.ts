import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerWhereInput } from '../server/server-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ServerDeleteManyInput {

    @Field(() => ServerWhereInput, {nullable:false})
    @Type(() => ServerWhereInput)
    where!: ServerWhereInput;
}
