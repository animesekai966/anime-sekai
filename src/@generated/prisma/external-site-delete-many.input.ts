import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalSiteWhereInput } from '../external-site/external-site-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ExternalSiteDeleteManyInput {

    @Field(() => ExternalSiteWhereInput, {nullable:false})
    @Type(() => ExternalSiteWhereInput)
    where!: ExternalSiteWhereInput;
}
