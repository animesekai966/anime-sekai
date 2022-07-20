import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereInput } from './characters-on-animes-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCharactersOnAnimesArgs {

    @Field(() => CharactersOnAnimesWhereInput, {nullable:true})
    @Type(() => CharactersOnAnimesWhereInput)
    where?: CharactersOnAnimesWhereInput;
}
