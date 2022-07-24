import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerQuality } from './server-quality.enum';

@InputType()
export class ServerObjectEqualityInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    translatedBy!: string;

    @Field(() => ServerQuality, {nullable:false})
    quality!: keyof typeof ServerQuality;

    @Field(() => String, {nullable:false})
    url!: string;
}
