import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerQuality } from './server-quality.enum';

@InputType()
export class EnumServerQualityFieldUpdateOperationsInput {

    @Field(() => ServerQuality, {nullable:true})
    set?: keyof typeof ServerQuality;
}
