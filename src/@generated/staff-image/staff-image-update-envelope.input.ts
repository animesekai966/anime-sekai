import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffImageCreateInput } from './staff-image-create.input';
import { Type } from 'class-transformer';
import { StaffImageUpdateInput } from './staff-image-update.input';

@InputType()
export class StaffImageUpdateEnvelopeInput {

    @Field(() => StaffImageCreateInput, {nullable:true})
    @Type(() => StaffImageCreateInput)
    set?: StaffImageCreateInput;

    @Field(() => StaffImageUpdateInput, {nullable:true})
    @Type(() => StaffImageUpdateInput)
    update?: StaffImageUpdateInput;
}
