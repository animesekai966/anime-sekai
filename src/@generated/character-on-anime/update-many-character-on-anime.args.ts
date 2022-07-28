import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeUpdateManyMutationInput } from './character-on-anime-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeWhereInput } from './character-on-anime-where.input';

@ArgsType()
export class UpdateManyCharacterOnAnimeArgs {

    @Field(() => CharacterOnAnimeUpdateManyMutationInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateManyMutationInput)
    data!: CharacterOnAnimeUpdateManyMutationInput;

    @Field(() => CharacterOnAnimeWhereInput, {nullable:true})
    @Type(() => CharacterOnAnimeWhereInput)
    where?: CharacterOnAnimeWhereInput;
}
