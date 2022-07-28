import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereInput } from './character-on-anime-where.input';

@InputType()
export class CharacterOnAnimeListRelationFilter {

    @Field(() => CharacterOnAnimeWhereInput, {nullable:true})
    every?: CharacterOnAnimeWhereInput;

    @Field(() => CharacterOnAnimeWhereInput, {nullable:true})
    some?: CharacterOnAnimeWhereInput;

    @Field(() => CharacterOnAnimeWhereInput, {nullable:true})
    none?: CharacterOnAnimeWhereInput;
}
