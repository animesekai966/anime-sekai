import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class StaffImageWhereInput {

    @Field(() => [StaffImageWhereInput], {nullable:true})
    AND?: Array<StaffImageWhereInput>;

    @Field(() => [StaffImageWhereInput], {nullable:true})
    OR?: Array<StaffImageWhereInput>;

    @Field(() => [StaffImageWhereInput], {nullable:true})
    NOT?: Array<StaffImageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    large?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    medium?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    small?: StringFilter;
}
