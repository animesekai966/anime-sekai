import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterUpdateManyMutationInput } from './character-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CharacterWhereInput } from './character-where.input';

@ArgsType()
export class UpdateManyCharacterArgs {

    @Field(() => CharacterUpdateManyMutationInput, {nullable:false})
    @Type(() => CharacterUpdateManyMutationInput)
    data!: CharacterUpdateManyMutationInput;

    @Field(() => CharacterWhereInput, {nullable:true})
    @Type(() => CharacterWhereInput)
    where?: CharacterWhereInput;
}
