import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ExternalLinkType } from '../prisma/external-link-type.enum';

@ObjectType()
export class ExternalLink {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    site!: string | null;

    @Field(() => ExternalLinkType, {nullable:false})
    type!: keyof typeof ExternalLinkType;

    @Field(() => String, {nullable:true})
    language!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;
}
