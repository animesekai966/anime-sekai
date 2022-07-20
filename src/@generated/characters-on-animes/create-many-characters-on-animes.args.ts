import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateManyInput } from './characters-on-animes-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCharactersOnAnimesArgs {

    @Field(() => [CharactersOnAnimesCreateManyInput], {nullable:false})
    @Type(() => CharactersOnAnimesCreateManyInput)
    data!: Array<CharactersOnAnimesCreateManyInput>;
}
