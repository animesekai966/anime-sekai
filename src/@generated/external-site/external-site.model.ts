import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExternalSiteType } from '../prisma/external-site-type.enum';

@ObjectType()
export class ExternalSite {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => ExternalSiteType, {nullable:true,defaultValue:'INFO'})
    type!: keyof typeof ExternalSiteType | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => String, {nullable:true})
    language!: string | null;
}
