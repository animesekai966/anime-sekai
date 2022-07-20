import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesScalarWhereInput } from './characters-on-animes-scalar-where.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesUpdateManyMutationInput } from './characters-on-animes-update-many-mutation.input';

@InputType()
export class CharactersOnAnimesUpdateManyWithWhereWithoutStaffInput {

    @Field(() => CharactersOnAnimesScalarWhereInput, {nullable:false})
    @Type(() => CharactersOnAnimesScalarWhereInput)
    where!: CharactersOnAnimesScalarWhereInput;

    @Field(() => CharactersOnAnimesUpdateManyMutationInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateManyMutationInput)
    data!: CharactersOnAnimesUpdateManyMutationInput;
}
