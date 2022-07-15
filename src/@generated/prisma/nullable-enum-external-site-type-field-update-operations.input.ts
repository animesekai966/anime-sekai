import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalSiteType } from './external-site-type.enum';

@InputType()
export class NullableEnumExternalSiteTypeFieldUpdateOperationsInput {

    @Field(() => ExternalSiteType, {nullable:true})
    set?: keyof typeof ExternalSiteType;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
