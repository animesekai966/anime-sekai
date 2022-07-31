import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkCreateInput } from '../external-link/external-link-create.input';
import { Type } from 'class-transformer';
import { ExternalLinkUpdateManyInput } from '../external-link/external-link-update-many.input';
import { ExternalLinkDeleteManyInput } from './external-link-delete-many.input';

@InputType()
export class ExternalLinkListUpdateEnvelopeInput {

    @Field(() => [ExternalLinkCreateInput], {nullable:true})
    @Type(() => ExternalLinkCreateInput)
    set?: Array<ExternalLinkCreateInput>;

    @Field(() => [ExternalLinkCreateInput], {nullable:true})
    push?: Array<ExternalLinkCreateInput>;

    @Field(() => ExternalLinkUpdateManyInput, {nullable:true})
    @Type(() => ExternalLinkUpdateManyInput)
    updateMany?: ExternalLinkUpdateManyInput;

    @Field(() => ExternalLinkDeleteManyInput, {nullable:true})
    @Type(() => ExternalLinkDeleteManyInput)
    deleteMany?: ExternalLinkDeleteManyInput;
}
