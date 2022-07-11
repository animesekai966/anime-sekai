import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicWhereInput } from './anime-demographic-where.input';
import { Type } from 'class-transformer';
import { AnimeDemographicOrderByWithRelationInput } from './anime-demographic-order-by-with-relation.input';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeDemographicScalarFieldEnum } from './anime-demographic-scalar-field.enum';

@ArgsType()
export class FindManyAnimeDemographicArgs {

    @Field(() => AnimeDemographicWhereInput, {nullable:true})
    @Type(() => AnimeDemographicWhereInput)
    where?: AnimeDemographicWhereInput;

    @Field(() => [AnimeDemographicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeDemographicOrderByWithRelationInput>;

    @Field(() => AnimeDemographicWhereUniqueInput, {nullable:true})
    cursor?: AnimeDemographicWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AnimeDemographicScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AnimeDemographicScalarFieldEnum>;
}
