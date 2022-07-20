import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereInput } from './characters-on-animes-where.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesOrderByWithRelationInput } from './characters-on-animes-order-by-with-relation.input';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharactersOnAnimesScalarFieldEnum } from './characters-on-animes-scalar-field.enum';

@ArgsType()
export class FindFirstCharactersOnAnimesArgs {

    @Field(() => CharactersOnAnimesWhereInput, {nullable:true})
    @Type(() => CharactersOnAnimesWhereInput)
    where?: CharactersOnAnimesWhereInput;

    @Field(() => [CharactersOnAnimesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharactersOnAnimesOrderByWithRelationInput>;

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:true})
    cursor?: CharactersOnAnimesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CharactersOnAnimesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CharactersOnAnimesScalarFieldEnum>;
}
