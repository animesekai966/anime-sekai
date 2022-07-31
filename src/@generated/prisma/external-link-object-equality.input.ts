import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkType } from './external-link-type.enum';

@InputType()
export class ExternalLinkObjectEqualityInput {

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
