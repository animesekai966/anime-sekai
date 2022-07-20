import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereInput } from './character-where.input';
import { Type } from 'class-transformer';
import { CharacterOrderByWithRelationInput } from './character-order-by-with-relation.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterScalarFieldEnum } from './character-scalar-field.enum';

@ArgsType()
export class FindManyCharacterArgs {

    @Field(() => CharacterWhereInput, {nullable:true})
    @Type(() => CharacterWhereInput)
    where?: CharacterWhereInput;

    @Field(() => [CharacterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterOrderByWithRelationInput>;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    cursor?: CharacterWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CharacterScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CharacterScalarFieldEnum>;
}
