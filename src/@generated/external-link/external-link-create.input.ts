import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkType } from '../prisma/external-link-type.enum';

@InputType()
export class ExternalLinkCreateInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    site?: string;

    @Field(() => ExternalLinkType, {nullable:false})
    type!: keyof typeof ExternalLinkType;

    @Field(() => String, {nullable:true})
    language?: string;

    @Field(() => String, {nullable:true})
    color?: string;
}
