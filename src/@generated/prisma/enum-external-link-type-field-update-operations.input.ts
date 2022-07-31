import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExternalLinkType } from './external-link-type.enum';

@InputType()
export class EnumExternalLinkTypeFieldUpdateOperationsInput {

    @Field(() => ExternalLinkType, {nullable:true})
    set?: keyof typeof ExternalLinkType;
}
