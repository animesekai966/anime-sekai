import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerCreateInput } from '../server/server-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ServerListCreateEnvelopeInput {

    @Field(() => [ServerCreateInput], {nullable:true})
    @Type(() => ServerCreateInput)
    set?: Array<ServerCreateInput>;
}
