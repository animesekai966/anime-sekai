import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereInput } from './characters-on-animes-where.input';

@InputType()
export class CharactersOnAnimesListRelationFilter {

    @Field(() => CharactersOnAnimesWhereInput, {nullable:true})
    every?: CharactersOnAnimesWhereInput;

    @Field(() => CharactersOnAnimesWhereInput, {nullable:true})
    some?: CharactersOnAnimesWhereInput;

    @Field(() => CharactersOnAnimesWhereInput, {nullable:true})
    none?: CharactersOnAnimesWhereInput;
}
