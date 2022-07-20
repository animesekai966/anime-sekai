import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateInput } from './characters-on-animes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCharactersOnAnimesArgs {

    @Field(() => CharactersOnAnimesCreateInput, {nullable:false})
    @Type(() => CharactersOnAnimesCreateInput)
    data!: CharactersOnAnimesCreateInput;
}
