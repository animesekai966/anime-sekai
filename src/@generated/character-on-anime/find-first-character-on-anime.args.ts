import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereInput } from './character-on-anime-where.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeOrderByWithRelationInput } from './character-on-anime-order-by-with-relation.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterOnAnimeScalarFieldEnum } from './character-on-anime-scalar-field.enum';

@ArgsType()
export class FindFirstCharacterOnAnimeArgs {

    @Field(() => CharacterOnAnimeWhereInput, {nullable:true})
    @Type(() => CharacterOnAnimeWhereInput)
    where?: CharacterOnAnimeWhereInput;

    @Field(() => [CharacterOnAnimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterOnAnimeOrderByWithRelationInput>;

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:true})
    cursor?: CharacterOnAnimeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CharacterOnAnimeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CharacterOnAnimeScalarFieldEnum>;
}
