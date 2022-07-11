import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalSiteCreateInput } from '../external-site/external-site-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ExternalSiteListCreateEnvelopeInput {

    @Field(() => [ExternalSiteCreateInput], {nullable:true})
    @Type(() => ExternalSiteCreateInput)
    set?: Array<ExternalSiteCreateInput>;
}
