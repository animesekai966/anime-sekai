import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkCreateInput } from '../external-link/external-link-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ExternalLinkListCreateEnvelopeInput {

    @Field(() => [ExternalLinkCreateInput], {nullable:true})
    @Type(() => ExternalLinkCreateInput)
    set?: Array<ExternalLinkCreateInput>;
}
