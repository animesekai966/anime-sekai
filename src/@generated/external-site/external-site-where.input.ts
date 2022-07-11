import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ExternalSiteWhereInput {

    @Field(() => [ExternalSiteWhereInput], {nullable:true})
    AND?: Array<ExternalSiteWhereInput>;

    @Field(() => [ExternalSiteWhereInput], {nullable:true})
    OR?: Array<ExternalSiteWhereInput>;

    @Field(() => [ExternalSiteWhereInput], {nullable:true})
    NOT?: Array<ExternalSiteWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;
}
