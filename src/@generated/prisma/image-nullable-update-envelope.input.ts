import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateInput } from '../image/image-create.input';
import { Type } from 'class-transformer';
import { ImageUpsertInput } from '../image/image-upsert.input';

@InputType()
export class ImageNullableUpdateEnvelopeInput {

    @Field(() => ImageCreateInput, {nullable:true})
    @Type(() => ImageCreateInput)
    set?: ImageCreateInput;

    @Field(() => ImageUpsertInput, {nullable:true})
    @Type(() => ImageUpsertInput)
    upsert?: ImageUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
