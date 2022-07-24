import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerQuality } from '../prisma/server-quality.enum';

@InputType()
export class ServerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    translatedBy!: string;

    @Field(() => ServerQuality, {nullable:true})
    quality?: keyof typeof ServerQuality;

    @Field(() => String, {nullable:false})
    url!: string;
}
