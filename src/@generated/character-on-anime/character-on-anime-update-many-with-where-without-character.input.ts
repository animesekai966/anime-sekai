import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeScalarWhereInput } from './character-on-anime-scalar-where.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateManyMutationInput } from './character-on-anime-update-many-mutation.input';

@InputType()
export class CharacterOnAnimeUpdateManyWithWhereWithoutCharacterInput {

    @Field(() => CharacterOnAnimeScalarWhereInput, {nullable:false})
    @Type(() => CharacterOnAnimeScalarWhereInput)
    where!: CharacterOnAnimeScalarWhereInput;

    @Field(() => CharacterOnAnimeUpdateManyMutationInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateManyMutationInput)
    data!: CharacterOnAnimeUpdateManyMutationInput;
}
