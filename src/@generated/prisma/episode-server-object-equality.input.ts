import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerQuailty } from './server-quailty.enum';

@InputType()
export class EpisodeServerObjectEqualityInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => ServerQuailty, {nullable:false})
    quality!: keyof typeof ServerQuailty;

    @Field(() => String, {nullable:false})
    translatedBy!: string;

    @Field(() => Date, {nullable:false})
    dateAdded!: Date | string;
}
