import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalSiteWhereInput } from './external-site-where.input';
import { Type } from 'class-transformer';
import { ExternalSiteUpdateInput } from './external-site-update.input';

@InputType()
export class ExternalSiteUpdateManyInput {

    @Field(() => ExternalSiteWhereInput, {nullable:false})
    @Type(() => ExternalSiteWhereInput)
    where!: ExternalSiteWhereInput;

    @Field(() => ExternalSiteUpdateInput, {nullable:false})
    @Type(() => ExternalSiteUpdateInput)
    data!: ExternalSiteUpdateInput;
}
