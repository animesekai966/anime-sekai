import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalSiteType } from '../prisma/external-site-type.enum';

@InputType()
export class ExternalSiteCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => ExternalSiteType, {nullable:true})
    type?: keyof typeof ExternalSiteType;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    language?: string;
}
