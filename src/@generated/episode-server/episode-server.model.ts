import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServerQuailty } from '../prisma/server-quailty.enum';

@ObjectType()
export class EpisodeServer {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => ServerQuailty, {nullable:false,defaultValue:'SD'})
    quality!: keyof typeof ServerQuailty;

    @Field(() => String, {nullable:false})
    translatedBy!: string;

    @Field(() => Date, {nullable:false})
    dateAdded!: Date;
}
