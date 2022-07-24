import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerCreateInput } from '../server/server-create.input';
import { Type } from 'class-transformer';
import { ServerUpdateManyInput } from '../server/server-update-many.input';
import { ServerDeleteManyInput } from './server-delete-many.input';

@InputType()
export class ServerListUpdateEnvelopeInput {

    @Field(() => [ServerCreateInput], {nullable:true})
    @Type(() => ServerCreateInput)
    set?: Array<ServerCreateInput>;

    @Field(() => [ServerCreateInput], {nullable:true})
    push?: Array<ServerCreateInput>;

    @Field(() => ServerUpdateManyInput, {nullable:true})
    @Type(() => ServerUpdateManyInput)
    updateMany?: ServerUpdateManyInput;

    @Field(() => ServerDeleteManyInput, {nullable:true})
    @Type(() => ServerDeleteManyInput)
    deleteMany?: ServerDeleteManyInput;
}
