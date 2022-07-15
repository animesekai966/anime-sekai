import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioWhereInput } from './studio-where.input';
import { Type } from 'class-transformer';
import { StudioOrderByWithRelationInput } from './studio-order-by-with-relation.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StudioScalarFieldEnum } from './studio-scalar-field.enum';

@ArgsType()
export class FindFirstStudioArgs {

    @Field(() => StudioWhereInput, {nullable:true})
    @Type(() => StudioWhereInput)
    where?: StudioWhereInput;

    @Field(() => [StudioOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudioOrderByWithRelationInput>;

    @Field(() => StudioWhereUniqueInput, {nullable:true})
    cursor?: StudioWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StudioScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StudioScalarFieldEnum>;
}
