import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateInput } from './characters-on-animes-create.input';
import { CharactersOnAnimesUpdateInput } from './characters-on-animes-update.input';

@ArgsType()
export class UpsertOneCharactersOnAnimesArgs {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesCreateInput, {nullable:false})
    @Type(() => CharactersOnAnimesCreateInput)
    create!: CharactersOnAnimesCreateInput;

    @Field(() => CharactersOnAnimesUpdateInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateInput)
    update!: CharactersOnAnimesUpdateInput;
}
