import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerQuailty } from '../prisma/server-quailty.enum';

@InputType()
export class EpisodeServerCreateInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => ServerQuailty, {nullable:true})
    quality?: keyof typeof ServerQuailty;

    @Field(() => String, {nullable:false})
    translatedBy!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
