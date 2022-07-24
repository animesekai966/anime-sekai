import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerWhereInput } from './server-where.input';
import { Type } from 'class-transformer';
import { ServerUpdateInput } from './server-update.input';

@InputType()
export class ServerUpdateManyInput {

    @Field(() => ServerWhereInput, {nullable:false})
    @Type(() => ServerWhereInput)
    where!: ServerWhereInput;

    @Field(() => ServerUpdateInput, {nullable:false})
    @Type(() => ServerUpdateInput)
    data!: ServerUpdateInput;
}
