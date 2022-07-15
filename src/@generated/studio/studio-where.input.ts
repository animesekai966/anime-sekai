import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class StudioWhereInput {

    @Field(() => [StudioWhereInput], {nullable:true})
    AND?: Array<StudioWhereInput>;

    @Field(() => [StudioWhereInput], {nullable:true})
    OR?: Array<StudioWhereInput>;

    @Field(() => [StudioWhereInput], {nullable:true})
    NOT?: Array<StudioWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;
}
