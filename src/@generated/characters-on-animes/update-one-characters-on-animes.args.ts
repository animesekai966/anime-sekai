import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesUpdateInput } from './characters-on-animes-update.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';

@ArgsType()
export class UpdateOneCharactersOnAnimesArgs {

    @Field(() => CharactersOnAnimesUpdateInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateInput)
    data!: CharactersOnAnimesUpdateInput;

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;
}
