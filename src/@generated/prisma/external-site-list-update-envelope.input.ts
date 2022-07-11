import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalSiteCreateInput } from '../external-site/external-site-create.input';
import { Type } from 'class-transformer';
import { ExternalSiteUpdateManyInput } from '../external-site/external-site-update-many.input';
import { ExternalSiteDeleteManyInput } from './external-site-delete-many.input';

@InputType()
export class ExternalSiteListUpdateEnvelopeInput {

    @Field(() => [ExternalSiteCreateInput], {nullable:true})
    @Type(() => ExternalSiteCreateInput)
    set?: Array<ExternalSiteCreateInput>;

    @Field(() => [ExternalSiteCreateInput], {nullable:true})
    push?: Array<ExternalSiteCreateInput>;

    @Field(() => ExternalSiteUpdateManyInput, {nullable:true})
    @Type(() => ExternalSiteUpdateManyInput)
    updateMany?: ExternalSiteUpdateManyInput;

    @Field(() => ExternalSiteDeleteManyInput, {nullable:true})
    @Type(() => ExternalSiteDeleteManyInput)
    deleteMany?: ExternalSiteDeleteManyInput;
}
