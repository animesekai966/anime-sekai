import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServerQuality } from '../prisma/server-quality.enum';

@ObjectType()
export class Server {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    translatedBy!: string;

    @Field(() => ServerQuality, {nullable:false,defaultValue:'FHD'})
    quality!: keyof typeof ServerQuality;

    @Field(() => String, {nullable:false})
    url!: string;
}
