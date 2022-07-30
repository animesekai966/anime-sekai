import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StaffName {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:true})
    arabic!: string | null;

    @Field(() => String, {nullable:true})
    native!: string | null;

    @Field(() => String, {nullable:true})
    nativeFamily!: string | null;

    @Field(() => [String], {nullable:true})
    alternates!: Array<string>;
}
