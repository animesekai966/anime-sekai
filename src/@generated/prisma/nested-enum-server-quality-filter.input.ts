import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerQuality } from './server-quality.enum';

@InputType()
export class NestedEnumServerQualityFilter {

    @Field(() => ServerQuality, {nullable:true})
    equals?: keyof typeof ServerQuality;

    @Field(() => [ServerQuality], {nullable:true})
    in?: Array<keyof typeof ServerQuality>;

    @Field(() => [ServerQuality], {nullable:true})
    notIn?: Array<keyof typeof ServerQuality>;

    @Field(() => NestedEnumServerQualityFilter, {nullable:true})
    not?: NestedEnumServerQualityFilter;
}
