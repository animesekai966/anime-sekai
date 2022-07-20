import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesUpdateManyMutationInput } from './characters-on-animes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesWhereInput } from './characters-on-animes-where.input';

@ArgsType()
export class UpdateManyCharactersOnAnimesArgs {

    @Field(() => CharactersOnAnimesUpdateManyMutationInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateManyMutationInput)
    data!: CharactersOnAnimesUpdateManyMutationInput;

    @Field(() => CharactersOnAnimesWhereInput, {nullable:true})
    @Type(() => CharactersOnAnimesWhereInput)
    where?: CharactersOnAnimesWhereInput;
}
